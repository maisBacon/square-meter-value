const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    try {
      await SquareMetersModel.findOne();
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new SquareMetersRepository();
