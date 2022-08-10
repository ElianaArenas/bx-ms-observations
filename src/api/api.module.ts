import { Module } from '@nestjs/common';
import { DomainModule } from 'src/infra/ioc/domain.module';
import { RepositoryModule } from 'src/infra/repositories/repository.module';
import { ObservationController } from './controllers';

@Module({
  imports: [RepositoryModule, DomainModule],
  controllers: [ObservationController],
})
export class ApiModule {}
