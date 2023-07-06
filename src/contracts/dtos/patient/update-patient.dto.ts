import { PartialType } from '@nestjs/swagger'
import { patchNestJsSwagger } from 'nestjs-zod'
import { CreatePatientDto } from './create-patient.dto'

export class UpdatePatientDto extends PartialType(CreatePatientDto) {}
patchNestJsSwagger()
