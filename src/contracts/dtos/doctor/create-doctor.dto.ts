import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'
import { CreateUserSchema } from '../user/create-user.dto'

const CreateDoctorSchema = z.intersection(
  CreateUserSchema,
  z.object({
    medical_register_number: z.number(),
    specialty: z.string(),
  })
)

export class CreateDoctorDto extends createZodDto(CreateDoctorSchema) {}
patchNestJsSwagger()
