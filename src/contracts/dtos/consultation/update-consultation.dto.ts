import { PartialType } from '@nestjs/mapped-types'
import { CreateConsultationDto } from './create-consultation.dto'
import { patchNestJsSwagger } from 'nestjs-zod'

export class UpdateConsultationDto extends PartialType(CreateConsultationDto) {}
patchNestJsSwagger()
