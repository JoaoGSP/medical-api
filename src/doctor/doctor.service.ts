import { Injectable } from '@nestjs/common'
import { CreateDoctorDto } from '../dto/doctor/create-doctor.dto'
import { UpdateDoctorDto } from '../dto/doctor/update-doctor.dto'
import { InjectModel } from '@nestjs/mongoose'
import { DoctorDocument, Doctor_Model } from '../schemas/doctor/doctor.schema'
import { Model } from 'mongoose'

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(Doctor_Model) private doctorModel: Model<DoctorDocument>
  ) {}
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
