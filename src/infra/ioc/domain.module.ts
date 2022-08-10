import { Module } from '@nestjs/common';
import { RepositoryModule } from '../repositories/repository.module';

@Module({
  imports: [RepositoryModule],
})
export class DomainModule {}
