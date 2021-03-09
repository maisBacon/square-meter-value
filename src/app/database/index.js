const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const SquareMeters = require('../models/SquareMeters');

const db = new Sequelize(dbConfig);

SquareMeters.init(db);

module.exports = db;
