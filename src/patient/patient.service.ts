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

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
