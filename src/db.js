
import { Sequelize } from 'sequelize';

import env from './config';
const { db_host, db_user, db_password, db_name } = env;

const sequelize = new Sequelize(
    db_name,
    db_user,
    db_password, 
    {
        host: db_host,
        dialect: "mysql"
    }
)

async function database(){

    try {
        //force: true === DROP TABLES;
        await sequelize.sync({ force: false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

database();

export default sequelize;
