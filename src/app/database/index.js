const Sequelize = require('sequelize');
const config = require('../config/database');
const SquareMeters = require('../models/SquareMeters');
require('../bootstrap');

let db;
if (process.env.NODE_ENV === 'test') {
  db = new Sequelize({
    dialect: config.dialect,
    storage: config.storage,
    define: config.define,
  });
} else {
  db = new Sequelize(config.url, {
    define: config.define,
    options: {
      native: true,
      dialect: config.dialect,
      dialectOptions: {
        rejectUnauthorized: false,
      },
    },
  });
}

SquareMeters.init(db);

module.exports = db;
