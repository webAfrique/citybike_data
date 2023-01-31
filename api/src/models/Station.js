"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db_connect_1 = require("../utils/db.connect");
var Station = db_connect_1["default"].define('station', {
    stationId: {
        type: sequelize_1["default"].INTEGER,
        allowNull: false
    },
    name: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    operator: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    capacity: {
        type: sequelize_1["default"].INTEGER,
        allowNull: false
    },
    coordinates: {
        type: sequelize_1["default"].STRING,
        allowNull: false
    },
    xCoordinate: {
        type: sequelize_1["default"].FLOAT,
        allowNull: false
    },
    yCoordinate: {
        type: sequelize_1["default"].FLOAT,
        allowNull: false
    }
});
exports["default"] = Station;
