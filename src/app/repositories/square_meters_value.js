const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    try {
      const res = await SquareMetersModel.findOne();
      logger.info('SquareMetersRepository', res.value);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async create() {
    logger.info('SquareMetersRepository');
    try {
      const res = await SquareMetersModel.create({ value: 10 });
      logger.info('SquareMetersRepository', res.value);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new SquareMetersRepository();
