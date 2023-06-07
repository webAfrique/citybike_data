import Station, { stationDocument } from "../models/Station.js";

export const create = async (data: stationDocument) => {
    try {
        const newJourney = await Station.create(data);
        return newJourney
      } catch (err) {
        return err;
      }
}

