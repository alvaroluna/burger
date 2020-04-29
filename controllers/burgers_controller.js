// the controller file is the same as the api-routes.js file in other examples

var express = require("express");
var router = express.Router();

// import burger.js to use its database functions
// burger.js must be created first...otherwise you get an error!
var burger = require("../models/burger.js");

// GET
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerHandlebarsObj = {
            burgers: data
        };

        console.log(burgerHandlebarsObj);
        res.render("index", burgerHandlebarsObj);
    });
});

// POST
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            // Send back the ID of the new quote
            res.json({
                id: result.insertId
            });
        });
});

// PUT
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// DELETE
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

////////////////////////////////////////
// export routes for server.js to use //
////////////////////////////////////////
module.exports = router;