import { IsArray, IsString } from 'class-validator';

export class CreateObservationDto {
  @IsString()
  code: string;
  @IsArray()
  @IsString({ each: true })
  observations: string[];
}
