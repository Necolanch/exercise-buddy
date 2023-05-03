const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
const config=require("./config/config.json");
require("dotenv").config();

app.use(express.json())
    //*Set static folder up in production
    app.use(express.static(path.join(__dirname, "../exercise-buddy/build")));

    app.get('/*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {host:config.development.host, dialect:config.development.dialect});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})