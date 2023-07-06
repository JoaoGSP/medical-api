import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { DoctorService } from './doctor.service'
import { CreateDoctorDto } from '@contracts/dtos/doctor/create-doctor.dto'
import { UpdateDoctorDto } from '@contracts/dtos/doctor/update-doctor.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto)
  }

  @Get()
  findAll() {
    return this.doctorService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(+id, updateDoctorDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorService.remove(+id)
  }
}
