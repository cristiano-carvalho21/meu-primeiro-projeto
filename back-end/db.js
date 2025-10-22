import {Pool} from 'pg';


const pool = new Pool({
    user: 'postgres',
    host: 'postgres.railway.internal',
    database: 'railway',
    password: 'kLXrDGBaiLDRhsxPJOkeoPUwxGbQpquU',
    port: 5432,
});

export default pool;