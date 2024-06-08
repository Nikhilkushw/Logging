const {Sequelize} = require('sequelize');
const db = require('../config/database');

const client = db.define('client',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    confirm_password:{
        type:Sequelize.STRING
    },
})

module.exports = client;