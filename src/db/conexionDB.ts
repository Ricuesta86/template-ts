import { Sequelize } from 'sequelize';


const db =new Sequelize('node-ts','root','root',{
    host:'localhost',
    dialect:'mariadb',
    // logging:false
});

export default db;