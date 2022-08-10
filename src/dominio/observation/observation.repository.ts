import { IRepository } from '../base/base.repository';
import { Observation } from './observation.model';

export interface IObservationRepository
  extends IRepository<Observation, string> {}
