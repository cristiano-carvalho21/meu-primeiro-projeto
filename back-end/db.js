import {Pool} from 'pg';
import dotenv from 'dotenv';
dotenv.config();

/*
const pool = new Pool({
    user: 'postgres',
    host: '@gondola.proxy.rlwy.net:13911/railway',
    database: 'railway',
    password: 'kLXrDGBaiLDRhsxPJOkeoPUwxGbQpquU',
    port: 5432,
});*/

const pool = new Pool({
  connectionString: process.env.Database_URl_Public,
  ssl: { rejectUnauthorized: false }
});

async function inserirUsuario() {
 
try{
        console.log('Usuário inserido com sucesso:');
        console.log(result.rows[0]);

        await pool.end(); // fecha a conexão
    } catch (err) {
        console.error('Erro ao inserir usuário:', err);
    }
}
export default pool;