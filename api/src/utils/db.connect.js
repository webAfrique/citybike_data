import { Sequelize } from 'sequelize'

const dbParams = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "123",
    DB: "testdb",
    dialect: "postgres",
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
    operatorsAliases: false,
  
    pool: {
      max: dbParams.pool.max,
      min: dbParams.pool.min,
      acquire: dbParams.pool.acquire,
      idle: dbParams.pool.idle
    }
})

export default sequelize