import { PartialType } from '@nestjs/swagger'
import { CreateConsultationDto } from './create-consultation.dto'
import { patchNestJsSwagger } from 'nestjs-zod'

export class UpdateConsultationDto extends PartialType(CreateConsultationDto) {}
patchNestJsSwagger()
