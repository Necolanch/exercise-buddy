const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Sequelize } = require('sequelize');
const config=require("./config/config.json");
const userRouter=require("./routes/userRoutes");
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
    //*Set static folder up in production
app.use(express.static(path.join(__dirname, "../exercise-buddy/build")));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname, '../exercise-buddy/build','index.html')));

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {host:config.development.host, dialect:config.development.dialect});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use("/user", userRouter);

app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})