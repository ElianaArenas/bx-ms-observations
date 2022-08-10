import { Module, Provider } from '@nestjs/common';
import { RepositoryModule } from '../repositories/repository.module';
import { ObservationDomainService } from '../../dominio/observation/impl/observation.service';
import { IObservationRepository } from 'src/dominio/observation/observation.repository';

const domainProviders: Provider[] = [
  {
    provide: 'IObservationDomainService',
    inject: ['IObservationRepository'],
    useFactory: (domainRepository: IObservationRepository) =>
      new ObservationDomainService(domainRepository),
  },
];
@Module({
  imports: [RepositoryModule],
  providers: domainProviders,
  exports: domainProviders,
})
export class DomainModule {}
