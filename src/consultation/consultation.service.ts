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

  async create(createConsultationDto: CreateConsultationDto): Promise<ConsultationDocument> {
    const consultationToCreate = new this.consultationModel(createConsultationDto)
    const result = await consultationToCreate.save()
    return result
  }

  async findAll(): Promise<ConsultationDocument[]> {
    const allConsultations = await this.consultationModel.find().exec()
    return allConsultations
  }

  async findOne(id: string): Promise<ConsultationDocument> {
    const oneConsultation = await this.consultationModel.findById(id).exec()
    return oneConsultation
  }

  async update(id: string, updateConsultationDto: UpdateConsultationDto) {
    const consultationToUpdate = await this.consultationModel
      .findByIdAndUpdate(id, updateConsultationDto)
      .exec()
    return consultationToUpdate
  }

  async remove(id: string) {
    const consultationToRemove = await this.consultationModel.findByIdAndDelete(id).exec()
    return consultationToRemove
  }
}
