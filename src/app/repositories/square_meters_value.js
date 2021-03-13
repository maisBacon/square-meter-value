const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    try {
      return await SquareMetersModel.findOne();
    } catch (e) {
      logger.error('database =>', e);
      throw new Error(e);
    }
  }

  async create() {
    logger.info('SquareMetersRepository');
    try {
      return await SquareMetersModel.create({ value: 10 });
    } catch (e) {
      logger.error('database =>', e);
      console.log(e);
    }
  }
}

module.exports = new SquareMetersRepository();
