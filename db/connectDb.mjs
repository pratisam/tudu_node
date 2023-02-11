import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user : "tudu_admin",
    password :"tudu",
    host : "localhost",
    port : 5432,
    database: "tudu"
})