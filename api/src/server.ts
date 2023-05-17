import * as Express from 'express'
import * as cors from 'cors'

import sequelize from './utils/db.connect.js'
import Journey from './models/Journey'
import Station from './models/Station'
import { findById } from './CRUD/journeys.crud.js'

try {
  //sequelize.sync({force: true})
  Journey.sequelize.sync()
  Station.sequelize.sync()
}
catch (error) {
  console.log(error)
}

const app = Express()

const corsOptions = {
    origin: "http://localhost:8080"
  };
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(Express.json());
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('wetin dey happen sef?')
});

app.get('/journeys/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const trip = await findById(id);
    res.send(trip);
  } catch (err) {
    res.send(err);
  }
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});