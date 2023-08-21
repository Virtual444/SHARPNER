const Sequelize = require('sequelize');

const sequelize = new Sequelize('online_shop', 'root', '0000', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;