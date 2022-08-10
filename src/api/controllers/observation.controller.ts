import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IObservationDomainService } from 'src/dominio/observation/observation.service';
import { GetObservationDto } from './dtos';

@Controller('observation')
export class ObservationController {
  constructor(
    @Inject('IObservationDomainService')
    private readonly _observationService: IObservationDomainService,
  ) {}

  @Post()
  async getObservations(@Body() body: GetObservationDto) {
    const observations = await this._observationService.getByCodes(
      body.evExCodes,
    );
    return observations;
  }
}
