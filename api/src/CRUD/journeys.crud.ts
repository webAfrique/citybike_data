import Journey, { journeyDocument } from "../models/Journey.js";

export const create = async (data: journeyDocument) => {
    try {
        const newJourney = await Journey.create(data);
        return newJourney
      } catch (err) {
        return err;
      }
}

