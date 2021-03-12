const Sequelize = require('sequelize');
const { url, define } = require('../config/database');
const SquareMeters = require('../models/SquareMeters');
require('../bootstrap');

const db = new Sequelize(url, {
  define,
  ssl: true,
});

SquareMeters.init(db);

module.exports = db;
