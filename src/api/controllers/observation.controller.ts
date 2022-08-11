import {
  Body,
  Controller,
  Get,
  Inject,
  ParseArrayPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Observation } from 'src/domain/observation/observation.model';
import { IObservationDomainService } from 'src/domain/observation/observation.service';
import { CreateObservationDto } from './dtos';

@Controller()
@ApiTags('Observations')
export class ObservationController {
  constructor(
    @Inject('IObservationDomainService')
    private readonly _observationService: IObservationDomainService,
  ) {}

  /* Create observations for events/exceptions */
  @Post()
  @ApiOperation({
    summary: 'Create observations for events/exceptions',
  })
  @ApiCreatedResponse({
    description: 'The observation has been successfully created.',
    type: Observation,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
  })
  async create(@Body() body: CreateObservationDto) {
    const observations = await this._observationService.create(body);
    return observations;
  }

  /* Get observations by an array of events/exceptions codes*/
  @Get()
  @ApiOperation({
    summary: 'Get observations by an array of events/exceptions codes',
  })
  @ApiOkResponse({
    description: 'Successfully received observations',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
  })
  async getObservations(
    @Query(
      'eventsExceptions',
      new ParseArrayPipe({ items: String, separator: ',' }),
    )
    eventsExceptions: string[],
  ) {
    const observations = await this._observationService.getByEventException(
      eventsExceptions,
    );

    return observations;
  }
}
