import { Injectable } from '@nestjs/common'
import { CreateConsultationDto } from '../dto/consultation/create-consultation.dto'
import { UpdateConsultationDto } from '../dto/consultation/update-consultation.dto'
import { InjectModel } from '@nestjs/mongoose'
import {
  ConsultationDocument,
  Consultation_Model,
} from 'src/schemas/consultation/consultation.schema'
import { Model } from 'mongoose'

@Injectable()
export class ConsultationService {
  constructor(
    @InjectModel(Consultation_Model)
    private consultationModel: Model<ConsultationDocument>
  ) {}

  create(createConsultationDto: CreateConsultationDto) {
    return 'This action adds a new consultation'
  }

  findAll() {
    return `This action returns all consultation`
  }

  findOne(id: number) {
    return `This action returns a #${id} consultation`
  }

  update(id: number, updateConsultationDto: UpdateConsultationDto) {
    return `This action updates a #${id} consultation`
  }

  remove(id: number) {
    return `This action removes a #${id} consultation`
  }
}
