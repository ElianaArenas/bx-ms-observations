import { DomainService } from '../../base/impl/base.service';
import { Observation } from '../../../infra/repositories/schemas/observation.model';
import { IObservationDomainService } from '../observation.service';
import { IObservationRepository } from '../observation.repository';
export class ObservationDomainService
  extends DomainService<Observation, string>
  implements IObservationDomainService
{
  constructor(public _observationRepository: IObservationRepository) {
    super(_observationRepository);
  }

  getByEventException(eventsExceptions: string[]): Promise<Observation[]> {
    return this._observationRepository.getByEventException(eventsExceptions);
  }
}
