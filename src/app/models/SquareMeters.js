const { Model, DataTypes } = require('sequelize');

class Meters extends Model {
  static init(sequelize) {
    super.init(
      {
        value: DataTypes.STRING,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Meters;
