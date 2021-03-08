const mongoose = require('mongoose');

const SquareMetersModel = mongoose.model(
  'square_meters',
  new mongoose.Schema({
    value: {
      type: String,
      required: true,
    },
  }),
);

module.exports = SquareMetersModel;
