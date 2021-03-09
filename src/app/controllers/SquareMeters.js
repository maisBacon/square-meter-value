const SquareMetersRepository = require('../repositories/square_meters_value');
const logger = require('../utils/logger');

class SquareMetersController {
  show(req, res) {
    logger.info('SquareMetersController');
    SquareMetersRepository.get()
      .then(response => {
        logger.info(`Response: ${response.value}`);
        return res.status(200).send({ value: response });
      })
      .catch(e => {
        logger.info(`Error: ${e}`);
        return res.status(500).send(e.message);
      });
  }

  //   store(req, res) {
  //     logger.info('SquareMetersController');
  //     SquareMeters.create({ value: '10' })
  //       .then(response => {
  //         logger.info(`Response: ${response}`);
  //         return res.status(200).send({ value: response });
  //       })
  //       .catch(e => {
  //         logger.info(`error: ${e}`);
  //         return res.status(200).send({ value: e });
  //       });
  //   }
}

module.exports = new SquareMetersController();
