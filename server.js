var express = require("express");
var path = require("path");


// Setup Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes.js')(app);



// Listens to the specified port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });