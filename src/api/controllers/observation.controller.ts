import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IObservationDomainService } from 'src/dominio/observation/observation.service';
import { GetObservationDto } from './dtos';
import { CreateObservationDto } from './dtos/create-observation.dto';

@Controller('observation')
export class ObservationController {
  constructor(
    @Inject('IObservationDomainService')
    private readonly _observationService: IObservationDomainService,
  ) {}

  @Post()
  async create(@Body() body: CreateObservationDto) {
    const observations = await this._observationService.create(body);
    return observations;
  }

  @Post('/evEx')
  async getObservations(@Body() body: GetObservationDto) {
    const observations = await this._observationService.getByCodes(
      body.evExCodes,
    );
    return observations;
  }
}
