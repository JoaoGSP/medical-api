import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateConsultationDto } from '@contracts/dtos/consultation/create-consultation.dto'
import { UpdateConsultationDto } from '@contracts/dtos/consultation/update-consultation.dto'
import {
  ConsultationDocument,
  Consultation_Model,
} from '@contracts/schemas/consultation/consultation.schema'

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
