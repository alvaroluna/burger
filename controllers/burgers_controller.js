// the controller file is the same as the api-routes.js file in other examples

var express = require("express");
var router = express.Router();

// import burger.js to use its database functions
// burger.js must be created first...otherwise you get an error!
var burger = require("../models/burger.js");

// __something__ GET REQUESTS
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerHandlebarsObj = {
            burgers: data
        };

        console.log(burgerHandlebarsObj);
        res.render("index", burgerHandlebarsObj);
    });
});

////////////////////////////////////////
// export routes for server.js to use //
////////////////////////////////////////
module.exports = router;