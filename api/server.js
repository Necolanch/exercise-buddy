const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }

app.listen(process.env.port || 3030, ()=>{
    console.log(`Server running on port ${process.env.port}`)
})