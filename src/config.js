import dotenv from 'dotenv';
dotenv.config();

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export default {
    port: PORT,
    db_host: DB_HOST,
    db_user: DB_USER,
    db_password: DB_PASSWORD,
    db_name: DB_NAME
}