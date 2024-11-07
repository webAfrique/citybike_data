import express from 'express'
// import pg from 'pg'
// import postgres from 'postgres'
import dotenv from 'dotenv'
import cors from 'cors'

import sequelize from './utils/db.connect.js'
import stationsRoute from './routes/stations.routes.js'

const app = express()

//dotenv.config()

const corsOptions = {
    origin: "http://localhost:8080"
  };
  
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/stations', stationsRoute)



sequelize.authenticate().then(() => {
  console.log('Database connected...')
}).catch((err:string) => {
  console.log('Database connection failed: ' + err)
})


const PORT = process.env.PORT || 8080
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`The server dey run for port ${PORT}`))
}).catch((err:string) => console.log("Error: " + err))

/*PG CONNECTION */

// const { Pool } = pg
// export const pool = new Pool({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'citybike',
//   password: process.env.DB_PASSWORD,
//   port: 5433,
// })

// export const sql = postgres({
//   username: 'postgres',
//   host: '127.0.0.1',
//   database: 'citybike',
//   password: process.env.DB_PASSWORD,
//   port: 5433,
// })

// const PORT = process.env.PORT || 8080
// app.listen(PORT, () => console.log(`The server dey run for port ${PORT}`))