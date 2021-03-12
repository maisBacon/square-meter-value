const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');

const routes = Router();

routes.get('/', SquareMetersController.show);

routes.get('/value', SquareMetersController.store);

module.exports = routes;
