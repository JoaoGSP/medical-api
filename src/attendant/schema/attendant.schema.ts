import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AttendantDocument = HydratedDocument<Attendant>

@Schema()
export class Attendant {
  @Prop()
  password: string
}

export const AttendantSchema = SchemaFactory.createForClass(Attendant)

export const Attendant_Model = Attendant.name
