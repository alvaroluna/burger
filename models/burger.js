// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    all: function (callBack) {
        orm.all("burgers", function (res) {
            callBack(res);
        });

    }
};

// export the database functions for the controller (burgers_controller.js)
module.exports = burger;