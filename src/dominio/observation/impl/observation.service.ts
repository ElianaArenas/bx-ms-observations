import { DomainService } from '../../base/impl/base.service';
import { Observation } from '../../../infra/repositories/schemas/observation.model';
import { IObservationDomainService } from '../observation.service';
export class ObservationDomainService
  extends DomainService<Observation, string>
  implements IObservationDomainService {}
