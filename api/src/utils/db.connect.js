import pg from 'pg'
import Sequelize from 'sequelize'

import dotenv from 'dotenv'

dotenv.config()

const password = process.env.DB_PASSWORD
const user = "postgres"
const database = "citybike"
const host = "localhost"	
const port = 5433

const { Client } = pg
export const db = new Client({
	user,
	password,
	host,
	port,
	database,
});

export const sequelize = new Sequelize(database, user, password, {
    host,
    dialect: "postgres",
    operatorsAliases: 0,
    port,
    logging: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

//export default sequelize