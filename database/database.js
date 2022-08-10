const sequelize = require("sequelize");

const Sequelize = require('sequelize');
const connection = new sequelize('guideanswer','root','deco2011',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;