import { Module } from '@nestjs/common';
import { DomainModule } from 'src/infra/ioc/domain.module';
import { ObservationController } from './controllers';

@Module({
  imports: [DomainModule],
  controllers: [ObservationController],
})
export class ApiModule {}
