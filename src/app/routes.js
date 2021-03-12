const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');

const routes = Router();

routes.get('/', SquareMetersController.show);

routes.post('/value', SquareMetersController.store);

module.exports = routes;
