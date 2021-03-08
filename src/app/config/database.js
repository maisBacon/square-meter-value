require('../bootstrap');

module.exports = {
  mongo: {
    path: process.env.DB_PATH || 'mongodb://localhost:27017/square_meter_value',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
