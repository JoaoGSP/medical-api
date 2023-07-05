import { PartialType } from '@nestjs/swagger'
import { patchNestJsSwagger } from 'nestjs-zod'
import { CreateUserDto } from './create-user.dto'

patchNestJsSwagger()
