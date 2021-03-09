const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    try {
      return await SquareMetersModel.findOne();
    } catch (e) {
      console.log(e);
    }
  }

  async create() {
    logger.info('SquareMetersRepository');
    try {
      return await SquareMetersModel.create({ value: '10' });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new SquareMetersRepository();
