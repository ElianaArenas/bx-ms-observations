import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ObservationDocument = Observation & Document;
@Schema({ versionKey: false })
export class Observation {
  @Prop({ type: String, required: true })
  code: string;

  @Prop({ type: Array<String>, required: true })
  observations: string[];
}

export const ObservationSchema = SchemaFactory.createForClass(Observation);
