import { Module, Provider } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ObservationRepository } from './observation.repository';
import { Observation, ObservationSchema } from './schemas';

const providers: Provider[] = [
  {
    provide: 'IObservationRepository',
    useClass: ObservationRepository,
  },
];
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb+srv://admin:admin12345@cluster0.ysc6i.mongodb.net/pruebas-eliana?retryWrites=true&w=majority',
      }),
    }),
    MongooseModule.forFeature([
      {
        name: Observation.name,
        schema: ObservationSchema,
      },
    ]),
  ],
  providers,
  exports: providers,
})
export class RepositoryModule {}
