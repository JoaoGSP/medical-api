import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { Consultation_Status } from '@contracts/constants/consultation.constants'
import { z } from 'nestjs-zod/z'

const CreateConsultationSchema = z.object({
  patient: z.string(),
  doctor: z.string(),
  date: z.dateString().format('date').future(),
  status: z.nativeEnum(Consultation_Status),
})

export class CreateConsultationDto extends createZodDto(CreateConsultationSchema) {}
patchNestJsSwagger()
