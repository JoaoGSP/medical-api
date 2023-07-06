import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { User } from '@contracts/schemas/user/user.schema'

@Schema()
export class Patient extends User {
  @Prop()
  national_healthy_card: number
}

export type PatientDocument = HydratedDocument<Patient>

export const PatientSchema = SchemaFactory.createForClass(Patient)

export const Patient_Model = Patient.name
