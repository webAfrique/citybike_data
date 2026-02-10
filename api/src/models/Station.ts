import * as Sequelize from 'sequelize'

import { sequelize } from '../utils/db.connect.js'

export type stationDocument = {
    station_id: number
    fin_name: string
    swe_name: string
    address: string
    city: string
    operator: string
    capacity: number
    x_coordinate: number
    y_coordinate: number
}

const Station = sequelize.define('station', {
    station_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    fin_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    swe_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    operator: {
        type: Sequelize.STRING
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    x_coordinate: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    y_coordinate: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, { timestamps: false })

export default Station