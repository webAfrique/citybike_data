import * as Express  from 'express'
import * as cors from 'cors'

import sequelize from './utils/db.connect.js'
import Journey from './models/Journey'
import Station from './models/Station'

// sequelize.sync()
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

const app = Express()

const corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(Express.json());
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(Express.urlencoded({ extended: true }));


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});