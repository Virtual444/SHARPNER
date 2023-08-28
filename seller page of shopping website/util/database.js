const Sequelize = require('sequelize');

const sequelize = new Sequelize('seller_page', 'root', '0000', {
    dialect: 'mysql',
    host: 'localhost',
    logging: console.log,
});

module.exports = sequelize;