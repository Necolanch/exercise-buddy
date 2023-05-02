const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
require("dotenv").config();

app.use(express.json())
    //*Set static folder up in production
    app.use(express.static(path.join(__dirname, "../exercise-buddy/build")));

    app.get('/*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));

const sequelize = new Sequelize("exercise_buddy", "root", "root", {host:"localhost", dialect:"mysql"});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})