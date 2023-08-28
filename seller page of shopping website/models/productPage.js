const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const Products = sequelize.define('Products', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },


    price:{
        type: Sequelize.DECIMAL,
        allowNull:false
    },


    category:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Products;