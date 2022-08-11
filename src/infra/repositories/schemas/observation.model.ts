import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ versionKey: false })
export class Observation {
  @Prop({ type: String, unique: true, required: true })
  eventException: string;

  @Prop({ type: Array<String>, required: true })
  observations: string[];
}

export type ObservationDocument = Observation & Document;

export const ObservationSchema = SchemaFactory.createForClass(Observation);
