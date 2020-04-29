///////////////////////////////////////////////////////
// MOST OF THIS EXCEPT THE FIRST PARAMETER REFERENCE //
// IS BOILERPLATE CODE                               //
///////////////////////////////////////////////////////

// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    // all
    all: function (callBack) {
        // "burgers" are DB table name!
        orm.all("burgers", function (res) {
            callBack(res);
        });
    },

    // create
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // update
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    // delete
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// export the database functions for the controller (burgers_controller.js)
// "burgers" is the reference object 
module.exports = burger;