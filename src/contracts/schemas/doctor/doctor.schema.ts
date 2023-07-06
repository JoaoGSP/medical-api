import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { User } from '@contracts/schemas/user/user.schema'

@Schema()
export class Doctor extends User {
  @Prop()
  medical_register_number: number

  @Prop()
  specialty: string
}

export type DoctorDocument = HydratedDocument<Doctor>

export const DoctorSchema = SchemaFactory.createForClass(Doctor)

export const Doctor_Model = Doctor.name
