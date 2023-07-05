import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'
import { PartialType } from '@nestjs/swagger'
const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  gender: z.string(),
  birth_date: z.string(),
  phone_number: z.number(),
  address: z.string(),
})

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
export class UpdateUserDto extends PartialType(CreateUserDto) {}

patchNestJsSwagger()
