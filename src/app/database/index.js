const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const SquareMeters = require('../models/SquareMeters');
require('../bootstrap');

const db = new Sequelize(dbConfig);

SquareMeters.init(db);

module.exports = db;
