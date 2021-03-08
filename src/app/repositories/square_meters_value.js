const SquareMetersModel = require('../models/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersRepository {
  async get() {
    logger.info('SquareMetersRepository');
    const [response] = await SquareMetersModel.find();
    return response.value;
  }
}

module.exports = new SquareMetersRepository();
