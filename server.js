///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                   //
// config -> contains files for connecting to mysql DB                                                                               //
// controllers -> contains files for creating website routes...need better way to describe this (api-routes.js in previous examples) //
// db -> the .sql database files                                                                                                     //
// models -> another DB thing?                                                                                                       //   
// public -> run of mill css style sheets and additional media assets                                                                //
// views -> contains html (handlebars) templates that data gets displayed on                                                         //
//                                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// dependencies
var express = require("express");

// set the access port or whatever
var PORT = process.env.PORT || 8080;
// set up an express app
var app = express();

// static directory - handlebars - to be served
app.use(express.static("./public")); // PUBLIC HAS SOME AJAX AND JS STUFF, NOT SURE WHAT IS GOING ON

// sets up an express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// routes - sometimes called api-routes.js
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});