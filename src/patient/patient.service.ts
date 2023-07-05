import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import {
  PatientDocument,
  Patient_Model,
} from 'src/schemas/patient/patient.schema'

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient_Model) private patientModel: Model<PatientDocument>
  ) {}
}
