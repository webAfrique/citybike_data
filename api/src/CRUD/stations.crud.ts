import { sequelize, db } from '../utils/db.connect.js'
//import { QueryTypes } from 'sequelize'
import Station, { stationDocument } from '../models/Station.js'
//import sequelize from 'sequelize'

export const addStation = async (data: stationDocument) => {
    try {
        await Station.create(data)
      } catch (err) {
        return err
    }
}

/* export const getStationById = async ( id: number ) => {
  try {
    const station = await Station.findOne({ 
      where: { station_id: id },
      raw: true,
    })
    //const station = await pool.query(`SELECT * FROM stations WHERE "station_id" = ${id}`)
    //const station = await sequelize.query(`SELECT * FROM stations WHERE "station_id" = ${id}`)
    return station
  } catch (err) {
    return err
  }
} */

export const getStationById = async ( id: number ) => {
  try {
    const station = (await db.query(`SELECT * FROM stations WHERE "station_id" = ${id}`)).rows[0]
    return station
  } catch (err) {
    return err
  }
}

/* export const getAllStationNames = async () => {
  const result = await Station.findAll({
    attributes: ['fin_name'],
    raw: true,
  })
  const stationNames = result.map((item) => item.fin_name)
  return stationNames
  //console.log(stationNames)
} */

export const getAllStationNames = async () => {
  try {
    const stations = await db.query(
      `SELECT "fin_name" FROM stations`,
    )
      
    return stations
  } catch (err) {
    return err
  }
}

const getStationByFinName = async (name:string) => {
  const station = await Station.findOne( { where: { fin_name: name }} )
  return station
}

const getSwedName = async (name:string) => {
  const station = await Station.findOne( { where: { fin_name: name }} )
  return station
}

export const searchStations = async (search_str:any) => {
  try {
    const stations = await sequelize.query(
      `SELECT * FROM stations 
      WHERE "fin_name" ILIKE '%${search_str}%' 
      OR "swe_name" ILIKE '%${search_str}%' 
      OR "address" ILIKE '%${search_str}%'`
    )
    return stations[0]
  } catch (err) {
    return err
  }
}


type stationData = { ['key']: string|number }

export const updateStation = async ( newData:stationData, targetRecord:stationData ) => {
  try {
    const station = await Station.update({
      ...newData
    },
    {
      where: targetRecord,
      returning: true,
      plain: true
    }
  )
    return station[1].dataValues
  } catch (err) {
    return err
  }

}

export const deleteStation = async ( id: number ) => {
  try {
    const deleted = await Station.destroy( { where: { station_id: id }} )
    return deleted
  } catch (err) {
    return err
  }
}

export default {
  addStation,
  getAllStationNames,
  getStationById,
  getStationByFinName,
  updateStation,
  deleteStation,
  searchStations
}

