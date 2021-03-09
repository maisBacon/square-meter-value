const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');

const routes = Router();

routes.get('/square-meters/value', SquareMetersController.show);

// routes.post('/square-meters/value', SquareMetersController.store);

module.exports = routes;
