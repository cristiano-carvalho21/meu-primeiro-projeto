import pool from "../db.js";

export  const getLivros = async(req, res) => {
    try {
        const result = await pool.query('select id,titulo,autor,editora,paginas from livros');
        res.json(result.rows, null, 2);
    } catch (error) {
        console.error('Erro no metodo get', error);
        res.status(500).json({error:'Erro interno'});
    }

};

//Busca dos livros da 10ª
export const getLivrosByIdOne = async(req, res) => {
    const result = await pool.query('select titulo,autor,editora,paginas from livros  where classe_id = 1 ');
    res.json(result.rows, null, 2);
};

export const getLivrosById = async(req, res) => {
    try {
        const {id} = req.params;
        console.log('Id recebido:',id);
        const result = await pool.query('select titulo,autor,editora,paginas from livros  where id = $1 ', [id]);
        res.json(result.rows, null, 2);
    } catch (error) {
        console.error('Erro no metodo get da função getLivroById');
        res.status(500).json({error:'Erro interno'});
    }
};

// Atualização dos livros da 10ª
export const putLivrosById = async(req, res) => {
    try {
        const {id} = req.params;
        const {titulo, autor, editora, paginas} = req.body;
        const result = await pool.query('update livros set titulo = $1, autor = $2, editora = $3, paginas = $4  where id = $5', [titulo,autor,editora,paginas,id]);
        res.json(result.rows, null, 2);
    } catch (error) {
        console.error('Erro no metodo put', error);
        res.status(500).json({error:'Erro interno'});
    }
};

// Delete dos livros da 10ª
export const deleteLivrosById = async(req, res) => {
    try {
        console.log('Id recebido:',req.params.id);
        //let {id} = req.params;
        const id = parseInt(req.params.id,10);
        console.log('Id convertido:',id)
        const result = await pool.query('delete from livros  where id = $1 ',[id]);
        res.json(result.rows, null, 2);
    } catch (error) {
        console.error('Erro no metodo delete', error);
        res.status(500).json({error:'Erro interno'});
    }

};

// Busca dos livros da 11ª classe
export const getLivrosByIdTwo = async(req, res) => {
    const result = await pool.query('select titulo,autor,editora,paginas from livros  where classe_id = 2 ');
    res.json(result.rows, null, 2);
};
// Busca dos livros da 12ª classe
export const getLivrosByIdThree = async(req, res) => {
    const result = await pool.query('select titulo,autor,editora,paginas from livros  where classe_id = 3 ');
    res.json(result.rows, null, 2);
};

 export const postlivros = async(req, res) => {
    const {titulo,autor,editora,paginas} = req.body;
    const result = await pool.query('insert into livros (titulo,autor,editora,paginas) values($1,$2,$3,$4)', [titulo,autor,editora,paginas]);
    res.json(result.rows, null, 2);
 };

