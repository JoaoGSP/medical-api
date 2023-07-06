import { PartialType } from '@nestjs/mapped-types'
import { CreateDoctorDto } from './create-doctor.dto'
import { patchNestJsSwagger } from 'nestjs-zod'

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
patchNestJsSwagger()
