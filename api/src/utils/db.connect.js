import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const password = process.env.DB_PASSWORD
const user = "postgres"
const database = "citybike"
//const host = process.env.DB_REMOTE_URI


const sequelize = new Sequelize(database, user, password, {
    host: 'localhost',
    dialect: "postgres",
    operatorsAliases: 0,
    port: 5433,
    logging: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

export default sequelize