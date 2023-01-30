const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

app.use(express.json())
    //*Set static folder up in production
    app.use(express.static(path.join(__dirname, "../exercise-buddy/build")));

    app.get('/*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));


app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})