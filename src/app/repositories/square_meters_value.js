const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    return await SquareMetersModel.findOne();
  }
}

module.exports = new SquareMetersRepository();
