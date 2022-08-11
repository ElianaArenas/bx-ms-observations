import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateObservationDto {
  @IsString()
  @ApiProperty({
    description: 'Provide event exception code',
    example: 'AC',
  })
  eventException: string;
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Provide observations',
    example: ['observation 1'],
  })
  observations: string[];
}
