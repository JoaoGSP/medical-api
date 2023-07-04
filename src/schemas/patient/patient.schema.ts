import { Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { User } from 'src/schemas/user/user.schema'

@Schema()
export class Patient extends User {}

export type PatientDocument = HydratedDocument<Patient>

export const PatientSchema = SchemaFactory.createForClass(Patient)

export const Patient_Model = Patient.name
