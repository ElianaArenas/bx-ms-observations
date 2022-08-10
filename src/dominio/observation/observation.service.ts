import { IDomainService } from '../base/base.service';
import { Observation } from '../../infra/repositories/schemas/observation.model';

export interface IObservationDomainService
  extends IDomainService<Observation, string> {}
