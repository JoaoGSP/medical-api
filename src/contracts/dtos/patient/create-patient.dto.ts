import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'
import { CreateUserSchema } from '../user/create-user.dto'

const CreatePatientSchema = z.intersection(
  CreateUserSchema,
  z.object({
    national_healthy_card: z.number(),
  })
)

export class CreatePatientDto extends createZodDto(CreatePatientSchema) {}
patchNestJsSwagger()
