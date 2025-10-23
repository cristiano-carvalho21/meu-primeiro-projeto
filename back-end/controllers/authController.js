import pool from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const SECRET = process.env.SECRET;

export const handleRegister = async(req, res) => {
    const {nome, email, password} = req.body;
    console.log(nome,email,password);
    const hashedPassword = await bcrypt.hash(password,10);
   
    try {
        await pool.query('insert into usuarios(nome,email,senha) values($1,$2, $3)', [nome,email,hashedPassword]);
        res.status(201).send('Usuário Cadastrado');
    } catch (error) {
        res.status(500).json({erro:'Erro ao cadastrar', detalhe:error});
    }
 };

export const handleLogin = async(req, res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).send('Email ou Senha não fornecido');
    }
    try {
        
    const result = await pool.query('select * from usuarios where email = $1',[email]);
    const user = result.rows[0];

    if(!user){
        return res.status(404).send('Usuário não encontrado')
    }

    const match = await bcrypt.compare(password,user.senha);
    if(!match){
        return res.send('Senha incorreta');
    }
    const token = jwt.sign(
        {id:user.id, categoria:user.categoria, email:user.email, nome:user.nome, password:user.senha},
        SECRET, {expiresIn: '5m'});

        res.json({token,categoria:user.categoria, nome:user.nome, email:user.email, password:user.senha});
    } catch (error) {
        console.error('Erro no login',error);
    }
 };

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split('')[1];
    if(!token){
        return res.status(401).json({message: 'Token não fornecido'});
    }
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: 'Token Inválido'});
        }
        req.user = user;
        next();
    })
};

export const verifyAdmin = async(req, res, next) => {
     try {
         const {role} = req.user;
         if(role !== 'admin'){
            return res.status(403).json({message: 'Acesso negado'});
         }
         next();
     } catch (error) {
         console.error(error);
         res.status(500).json({error:'Erro interno'})
     }
   }; 

   