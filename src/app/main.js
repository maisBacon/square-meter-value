const Express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./config/database');
require('./bootstrap');

class Main {
  constructor() {
    this.express = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(Express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}
module.exports = new Main().express;
