import { Body, Controller, Post } from '@nestjs/common';

@Controller('observation')
export class ObservationController {
  constructor() {}

  @Post()
  async getObservations(@Body() body) {}
}
