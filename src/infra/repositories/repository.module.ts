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
        uri:
          process.env.MONGO_SERVER ||
          'mongodb+srv://cluster0.ysc6i.mongodb.net/pruebas-eliana?retryWrites=true&w=majority',
        auth: {
          username: process.env.MONGO_USER || 'admin',
          password: process.env.MONGO_PASSWORD || 'admin12345',
        },
        dbName: process.env.MONGO_DB_NAME || 'pruebas-eliana',
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
