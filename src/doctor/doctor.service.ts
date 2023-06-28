import { Injectable } from '@nestjs/common'
import { CreateDoctorDto } from './dto/create-doctor.dto'
import { UpdateDoctorDto } from './dto/update-doctor.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Doctor, Doctor_Model } from './schemas/doctor.schema'
import { Model } from 'mongoose'

@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor_Model) private doctorModel: Model<Doctor>) {}
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
