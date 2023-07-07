import { PartialType } from '@nestjs/swagger'
import { CreateDoctorDto } from './create-doctor.dto'
import { patchNestJsSwagger } from 'nestjs-zod'

export class UpdateDoctorDto extends PartialType(CreateDoctorDto) {}
patchNestJsSwagger()
