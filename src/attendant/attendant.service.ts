import { Injectable } from '@nestjs/common'
import { CreateAttendantDto } from './dto/create-attendant.dto'
import { UpdateAttendantDto } from './dto/update-attendant.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Attendant, Attendant_Model } from './schema/attendant.schema'
import { Model } from 'mongoose'

@Injectable()
export class AttendantService {
  constructor(
    @InjectModel(Attendant_Model) private attendantModel: Model<Attendant>
  ) {}
  create(createAttendantDto: CreateAttendantDto) {
    return 'This action adds a new attendant'
  }

  findAll() {
    return `This action returns all attendant`
  }

  findOne(id: number) {
    return `This action returns a #${id} attendant`
  }

  update(id: number, updateAttendantDto: UpdateAttendantDto) {
    return `This action updates a #${id} attendant`
  }

  remove(id: number) {
    return `This action removes a #${id} attendant`
  }
}
