const { Model, DataTypes } = require('sequelize');

class Meters extends Model {
  static init(sequelize) {
    super.init(
      {
        value: DataTypes.STRING,
      },
      {
        modelName: 'meters',
        freezeTableName: true,
        tableName: 'meters',
        sequelize,
      },
    );
  }
}

module.exports = Meters;
