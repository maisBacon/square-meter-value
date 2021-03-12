const Sequelize = require('sequelize');
const { url, define } = require('../config/database');
const SquareMeters = require('../models/SquareMeters');
require('../bootstrap');

const db = new Sequelize(url, {
  define,
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});

SquareMeters.init(db);

module.exports = db;
