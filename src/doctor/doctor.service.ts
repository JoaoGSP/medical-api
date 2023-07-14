import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateDoctorDto } from '@contracts/dtos/doctor/create-doctor.dto'
import { UpdateDoctorDto } from '@contracts/dtos/doctor/update-doctor.dto'
import { DoctorDocument, Doctor_Model } from '@contracts/schemas/doctor/doctor.schema'

@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor_Model) private doctorModel: Model<DoctorDocument>) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorDocument> {
    const createdDoctor = new this.doctorModel(createDoctorDto)
    return createdDoctor.save()
  }

  async findAll(): Promise<DoctorDocument[]> {
    return this.doctorModel.find().exec()
  }

  async findOne(id: string) {
    return this.doctorModel.findById(id).exec()
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    const updatedDoctor = this.doctorModel.findByIdAndUpdate(id, updateDoctorDto).exec()
    return updatedDoctor
  }

  remove(id: string) {
    const removedDoctor = this.doctorModel.findByIdAndDelete(id).exec()
    return removedDoctor
  }
}
