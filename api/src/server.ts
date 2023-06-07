import express from 'express'
import cors from 'cors'

import sequelize from './utils/db.connect.js'

const app = express()

const corsOptions = {
    origin: "http://localhost:8080"
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Database connection failed: ' + err);
})


const PORT = process.env.PORT || 8080;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`The server dey run for port ${PORT}`));
}).catch(err => console.log("Error: " + err));