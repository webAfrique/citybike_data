import Sequelize from 'sequelize'
//import dotenv from 'dotenv'

//dotenv.config({ path: '../../.env' })

const dbParams = {
    HOST: "127.0.0.1",
    USER: "postgres",
    PASSWORD: "webAfrique",
    DB: "citybike",
    dialect: "postgres",
    port: "5433",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }


const sequelize = new Sequelize(dbParams.DB, dbParams.USER, dbParams.PASSWORD, {
    host: dbParams.HOST,
    dialect: dbParams.dialect,
    operatorsAliases: 0,
    port: dbParams.port,
    logging: false,
  
    pool: {
      max: dbParams.pool.max,
      min: dbParams.pool.min,
      acquire: dbParams.pool.acquire,
      idle: dbParams.pool.idle
    }
})

export default sequelize