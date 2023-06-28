import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type DoctorDocument = HydratedDocument<Doctor>

@Schema()
export class Doctor {}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)

export const Doctor_Model = Doctor.name
