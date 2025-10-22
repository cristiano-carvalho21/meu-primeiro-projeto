import pool from '../db.js';
let posts = [
    {nProcesso:1290, email:'antonioalva@gmail.com', senha:'alva_123'},
    {nProcesso:1990, email:'andreopalva@gmail.com', senha:'andr@333'},
    {nProcesso:71286, email:'cristianocarvalh207@gmail.com', senha:'Madalen@7'},
    {nProcesso:72286, email:'cristianocarvalh207@gmail.com', senha:'Madalen@7'}
 ];
export const getPosts = async (req, res, next) => {
    res = await pool.query('SELECT * from usuarios')
    res.status(200).json(res.rows);
 };
export  const getPost = async (req, res, next) => {
    const nProcesso = parseInt(req.params.nProcesso);
    const post = await pool.query('SELECT * FROM usuarios WHERE nProcesso = $1',[nProcesso]);
    if(!post){
        const error = new Error(`Número de processo ${nProcesso} não encontrado`);
        return next(error);
    }
    res.status(200).json(post.rows[0]);
}  
export const createPost = async (req, res) => {
    const {nProcesso,email,senha} = req.body ;
    const post = await pool.query('INSERT INTO usuarios VALUES (1,2,3) RETURNING *',[nProcesso,email,senha])
    res.status(200).json(post.rows[0]);
 }
export const updatePost = async (req, res, next) => {
    const nprocesso = parseInt(req.params.nProcesso);
    const {nProcesso,email,senha} = req.body;
    const post = await pool.query('UPDATE usuarios SET nProcesso = 1, email = 2, senha = 3 WHERE nprocesso = nProcesso RETURNING *',[nProcesso,email,senha])
    if(!post){
        return next(error);
    }
    res.status(200).json(post.rows[0]);  
 }
export const deletePost = async (req, res, next) => {
    const nProcesso = parseInt(req.params.nProcesso);
    const post =await pool.query('DELETE FROM ususarios WHERE nProcesso = $1',[nProcesso]);
    if(!post){
        return next(error);
    }
    res.status(200).json('Usuario deletado com sucesso');
    
 }