const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');

const routes = Router();

routes.get('/square-meters/value', SquareMetersController.show);

module.exports = routes;
