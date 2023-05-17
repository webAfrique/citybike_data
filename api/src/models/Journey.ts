import * as Sequelize from 'sequelize'

import sequelize from '../utils/db.connect'

export type journeyDocument = {
    departure: string
    return: string
    departure_station_id: number
    departure_station: string
    return_station_id: number
    return_station: string
    distance_m: number
    duration_sec: number
}

const Journey = sequelize.define('journey', {
    departure: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return: {
        type: Sequelize.DATE,
        allowNull: false
    },
    departure_station_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    departure_station: {
        type: Sequelize.STRING,
        allowNull: false
    },
    return_station_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    return_station: {
        type: Sequelize.STRING,
        allowNull: false
    },
    distance_m: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    duration_sec: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, { timestamps: false })

export default Journey