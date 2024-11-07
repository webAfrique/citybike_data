import express from 'express'

import stationCRUD from '../CRUD/stations.crud.js'

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

stationsRoute.get('/id', async (req, res, next) => {
  const { id } = req.query
  try {
    const station = await stationCRUD.getStationById(+id)
    res.send(station[0])
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

