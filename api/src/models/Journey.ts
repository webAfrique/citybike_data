import * as Sequelize from 'sequelize'

import sequelize from '../utils/db.connect'

export type journeyDocument = {
    departure_station: string
    return_station: string
    distance: number
    duration: string

}

const Journey = sequelize.define('journey', {
    departure_station: {
        type: Sequelize.STRING,
        allowNull: false
    },
    return_station: {
        type: Sequelize.STRING,
        allowNull: false
    },
    distance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Journey