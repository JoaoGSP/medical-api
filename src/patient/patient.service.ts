import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { PatientDocument, Patient_Model } from '@contracts/schemas/patient/patient.schema'
import { CreatePatientDto } from '@/contracts/dtos/patient/create-patient.dto'
import { UpdatePatientDto } from '@/contracts/dtos/patient/update-patient.dto'

@Injectable()
export class PatientService {
  constructor(@InjectModel(Patient_Model) private patientModel: Model<PatientDocument>) {}

  async create(createPatientDto: CreatePatientDto): Promise<PatientDocument> {
    const createdPatient = new this.patientModel(createPatientDto)
    return createdPatient.save()
  }

  async findAll(): Promise<PatientDocument[]> {
    return this.patientModel.find().exec()
  }

  async findOne(id: string) {
    return this.patientModel.findById(id).exec()
  }

  async update(id: string, updatePatientDto: UpdatePatientDto) {
    const updatedPatient = this.patientModel.findByIdAndUpdate(id, updatePatientDto).exec()
    return updatedPatient
  }

  remove(id: string) {
    const removedPatient = this.patientModel.findByIdAndDelete(id).exec()
    return removedPatient
  }
}
