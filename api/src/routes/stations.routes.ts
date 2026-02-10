import express, { response } from 'express'

import stationCRUD from '../CRUD/stations.crud.js'
//import { Op, fn, col, where} from 'sequelize'
import { db } from '../utils/db.connect.js'
import Journey from '../models/Journey.js'
import Station from '../models/Station.js'
import { normalizeData, generateSQLQuery, getChatResponse } from '../utils/functionLib.js'

const stationsRoute = express.Router()

stationsRoute.post('/', async (req, res, next) => {
    const data = req.body
    try {
        await stationCRUD.addStation(data)
        res.send('New station created')
      } catch (err) {
        return err
    }
    next()
})

stationsRoute.get('/all', async (req, res, next) => {
  try {
    const stationNames = await stationCRUD.getAllStationNames()
    res.send(stationNames)
  } catch (error) {
    return error
  }
  next()
})

stationsRoute.get('/id', async (req, res, next) => {
  const { id } = req.query
  try {
    const station = await stationCRUD.getStationById(+id)
    res.send(station)
  } catch (err) {
    return err
  }
  next()
})

stationsRoute.get('/name', async (req, res, next) => {
  const name  = req.query.name as string
  try {
    const station = await stationCRUD.getStationByFinName(name)
    res.send(station)
  } catch (err) {
    return err
  }
  next()
})

stationsRoute.get('/search', async (req, res, next) => {
  const { text } = req.query
  //const text = 'Golfpolku'
  console.log(text)
  try {
    const stations = await stationCRUD.searchStations(text)
    res.send(stations)
} catch (err) {
    return err
  }
  next()
})

stationsRoute.get('/query', async (req, res, next) => {
  const { prompt } = req.query as { prompt: string }
  
  try {
    const sql = (await generateSQLQuery(prompt)).completion
    const dataFromDB = (await db.query(sql)).rows as { [key: string]: any }[] //rememeber to import types properly
    const chatResponse = await getChatResponse(prompt, JSON.stringify(dataFromDB))
    console.log(sql)
    console.log(dataFromDB)
    res.send(chatResponse)
  } catch (err) {
    return err
  }
  next()
})

stationsRoute.put('/', async (req, res, next) => {
  const { update, where } = req.body
  try {
    const station = await stationCRUD.updateStation(update, where)
    res.send(station)
  } catch (err) {
    return err
  }
  next()
})

stationsRoute.delete('/:id', async (req, res, next) => {
  const { id } = req.body
  try {
    const deleted = await stationCRUD.deleteStation(id)
    deleted ? res.send(204) : res.send(404)
  } catch (err) {
    return err
  }
  next()
})


export default stationsRoute

/* const countJourneys = await Journey.findAll({
  where: {
      departure_station: 'Hanasaari',
      [sequelize.where(
          sequelize.fn('TRIM', sequelize.fn('TO_CHAR', sequelize.col('departure'), 'Month')),
          'May'
      )]
  }
}); */

