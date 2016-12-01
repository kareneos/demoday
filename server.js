//let, const
//var express = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
      
app.use(express.static(__dirname + "/dist"));

//app.listen(3000, () =>
    //console.log("server esta encendido");
          //);

app.listen(port, () => console.log(`server started on port ${port}`) );