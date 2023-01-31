import * as Sequelize from 'sequelize'

import sequelize from '../utils/db.connect'

export type stationDocument = {
    stationId: string
    name: string
    address: string
    operator: string
    capacity: number
    coordinates: string[]
    xCoordinate: number
    yCoodinate: number
}

const Station = sequelize.define('station', {
    stationId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    operator: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coordinates: {
        type: Sequelize.STRING,
        allowNull: false
    },
    xCoordinate: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    yCoordinate: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default Station