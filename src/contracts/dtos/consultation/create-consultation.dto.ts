import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const CreateConsultationSchema = z.object({
  patient: z.string(),
  doctor: z.string(),
  date: z.date(),
  status: z.string(),
})

export class CreateConsultationDto extends createZodDto(CreateConsultationSchema) {}
patchNestJsSwagger()
