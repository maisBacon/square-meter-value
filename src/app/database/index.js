const Sequelize = require('sequelize');
const { url, define } = require('../config/database');
const SquareMeters = require('../models/SquareMeters');
require('../bootstrap');

const db = new Sequelize(url, {
  define,
  options: {
    native: true,
    dialect: 'postgres',
    dialectOptions: {
      rejectUnauthorized: false,
    },
  },
});

SquareMeters.init(db);

module.exports = db;
