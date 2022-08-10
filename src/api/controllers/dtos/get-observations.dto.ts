import { IsArray } from 'class-validator';

export class GetObservationDto {
  @IsArray()
  evExCodes: string[];
}
