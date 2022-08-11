import { IsArray, IsString } from 'class-validator';

export class GetObservationDto {
  @IsArray()
  @IsString({ each: true })
  evExCodes: string[];
}
