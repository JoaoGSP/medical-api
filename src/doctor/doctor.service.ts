import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateDoctorDto } from '@contracts/dtos/doctor/create-doctor.dto'
import { UpdateDoctorDto } from '@contracts/dtos/doctor/update-doctor.dto'
import { DoctorDocument, Doctor_Model } from '@contracts/schemas/doctor/doctor.schema'

@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor_Model) private doctorModel: Model<DoctorDocument>) {}
  create(createDoctorDto: CreateDoctorDto) {
    return 'This action adds a new doctor'
  }

  findAll() {
    return `This action returns all doctor`
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`
  }
}
