import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Patient } from '../patient/patient.schema'
import { Doctor } from '../doctor/doctor.schema'
import { Consultation_Status } from 'src/constants/consultation.constants'

@Schema({ timestamps: true })
export class Consultation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patient: Patient

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' })
  doctor: Doctor

  @Prop({ type: Date, default: Date.now })
  date: Date

  @Prop({
    type: String,
    enum: Object.keys(Consultation_Status),
    default: Consultation_Status.Available,
  })
  status: Consultation_Status
}

export type ConsultationDocument = HydratedDocument<Consultation>

export const ConsultationSchema = SchemaFactory.createForClass(Consultation)

export const Consultation_Model = Consultation.name
