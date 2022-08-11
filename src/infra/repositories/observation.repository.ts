import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IObservationRepository } from 'src/domain/observation/observation.repository';
import { Observation, ObservationDocument } from './schemas';

export class ObservationRepository implements IObservationRepository {
  constructor(
    @InjectModel(Observation.name)
    private readonly _observationModel: Model<ObservationDocument>,
  ) {}

  async create(observation: Observation) {
    try {
      return await this._observationModel.create(observation);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll() {
    try {
      return await this._observationModel.find().exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(observationId: string) {
    try {
      return await this._observationModel.findById(observationId).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getByEventException(eventsExceptions: string[]) {
    try {
      return await this._observationModel
        .find({ eventException: { $in: eventsExceptions } })
        .exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
