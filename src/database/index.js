const Sequelize = require('sequelize');
const configDB = require('../config/database');

const Aluno = require('../models/Aluno')

const connection = new Sequelize(configDB)

Aluno.init(connection)

module.exports = connection