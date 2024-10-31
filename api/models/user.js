'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorites: DataTypes.JSON,
    Sunday: DataTypes.JSON,
    Monday: DataTypes.JSON,
    Tuesday: DataTypes.JSON,
    Wednesday: DataTypes.JSON,
    Thursday: DataTypes.JSON,
    Friday: DataTypes.JSON,
    Saturday: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};