const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { Sequelize } = require('sequelize');
const mysql=require("mysql2");
const cookieParser=require("cookie-parser");
const config=require("./config/config.json");
const authRouter=require("./routes/authRoutes");
const userRouter=require("./routes/userRoutes");
require("dotenv").config();


const corsConfig={origin:true, credentials:true}
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH, DELETE");
    }
  
    next();
  });

const connection = mysql.createConnection(process.env.DATABASE_URL);

if (process.env.NODE_ENV === "production") {
  console.log("here");
  const sequelize = new Sequelize(process.env.DATABASE_URL);
try {
    sequelize.authenticate();
    console.log("here")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
} else {
  const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {host:config.development.host, dialect:config.development.dialect});
try {
    sequelize.authenticate();
    console.log("HERE")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
}

app.use("/auth", authRouter);
app.use("/user", userRouter);

    //*Set static folder up in production
    app.use(express.static(path.join(__dirname, "../exercise-buddy/build")));

    app.get('/*', (req,res) => res.sendFile(path.join(__dirname, '../exercise-buddy/build','index.html')));

app.listen(process.env.PORT || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})