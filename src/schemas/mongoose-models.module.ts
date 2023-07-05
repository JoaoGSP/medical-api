import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema, User_Model } from './user/user.schema'
import { DoctorSchema, Doctor_Model } from './doctor/doctor.schema'
import { PatientSchema, Patient_Model } from './patient/patient.schema'
import {
  ConsultationSchema,
  Consultation_Model,
} from './consultation/consultation.schema'

const Models = [
  {
    name: User_Model,
    schema: UserSchema,
    discriminators: [
      { name: Doctor_Model, schema: DoctorSchema },
      { name: Patient_Model, schema: PatientSchema },
    ],
  },
  { name: Consultation_Model, schema: ConsultationSchema },
]

@Global()
@Module({
  imports: [MongooseModule.forFeature(Models)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
