"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db_connect_1 = require("../utils/db.connect");
var Journey = db_connect_1["default"].define('journey', {
    departure_station: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    return_station: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    distance: {
        type: sequelize_1["default"].FLOAT,
        allowNull: false
    },
    duration: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    }
});
exports["default"] = Journey;
