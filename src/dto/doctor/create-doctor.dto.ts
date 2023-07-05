import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const CreateDoctorSchema = z.object({
  medical_register_number: z.number(),
  specialty: z.string(),
})

export class CreateDoctorDto extends createZodDto(CreateDoctorSchema) {}
