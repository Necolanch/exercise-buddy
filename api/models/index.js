'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
require("dotenv").config();
const config=require("../config/config.json");
const env = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : "development";
const db = {};

let sequelize;
if (env === "development") {
  sequelize = new Sequelize(process.env.DEV_DATABASE_NAME, process.env.DEV_DATABASE_USERNAME, process.env.DEV_DATABASE_PASSWORD,{
    host:config.development.host,
    dialect:"mssql",
    dialectOptions:{
      ssl:{
        rejectUnauthorized:true
      }
    }
  });
  console.log('Dev connection has been established successfully.');
} else if (env === "production") {
  sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD,{
    host:config.production.host,
    dialect:"mssql",
    dialectOptions:{
      ssl:{
        rejectUnauthorized:true
      }
    }
  });
  console.log('Prod connection has been established successfully.');
} else {
    throw new Error("Cannot connect to database")
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
