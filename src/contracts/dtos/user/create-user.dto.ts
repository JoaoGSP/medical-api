import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  gender: z.enum(['male', 'female']),
  birth_date: z.dateString().format('date').past(),
  phone_number: z.number(),
  address: z.object({
    address1: z.string(),
    address2: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    zipCode: z.string(),
  }),
})

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
patchNestJsSwagger()
