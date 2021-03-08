const SquareMetersRepository = require('../repositories/square_meters_value');
const logger = require('../utils/logger');

class SquareMetersController {
  async show(req, res) {
    logger.info('SquareMetersController');
    const response = await SquareMetersRepository.get();
    logger.info(`Response success ${response}`);
    return res.status(200).send({ value: response });
  }
}

module.exports = new SquareMetersController();
