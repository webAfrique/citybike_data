import Journey, { journeyDocument } from "src/models/Journey";

export const create = async (data: journeyDocument) => {
    try {
        const newJourney = await Journey.create(data);
        return newJourney
      } catch (err) {
        return err;
      }
}

export const findById = async (id:string) => {
  try {
    const trip = await Journey.findOne({
      where: {
        id
      }
    })
    return trip
  } catch (err) {
    return err
  }
};