const {Sequelize} = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'Nikhil@371', {
    host: 'localhost',
    dialect: "postgres"
  });