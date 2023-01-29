const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})