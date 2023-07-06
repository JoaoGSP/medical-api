import { createZodDto, patchNestJsSwagger } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const AccountLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export class AccountLoginDto extends createZodDto(AccountLoginSchema) {}
patchNestJsSwagger()
