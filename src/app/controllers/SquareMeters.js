const SquareMetersRepository = require('../repositories/square_meters_value');
const logger = require('../utils/logger');

class SquareMetersController {
  async show(req, res) {
    logger.info('SquareMetersController');
    SquareMetersRepository.get()
      .then(response => {
        logger.info(`response => ${response}`);
        return res.status(200).send({ value: response.value });
      })
      .catch(e => {
        logger.error(`=> ${e.message}`);
        return res.status(500).send({ error: 'generic error' });
      });
  }

  async store(req, res) {
    logger.info('SquareMetersController');
    SquareMetersRepository.create(req.body.value)
      .then(response => {
        logger.info(`response => ${response}`);
        return res.status(200).send({ value: response });
      })
      .catch(e => {
        logger.error(`=> ${e.message}`);
        return res.status(500).send({ error: 'generic error' });
      });
  }
}

module.exports = new SquareMetersController();
