import { Module } from '@nestjs/common'
import { AttendantService } from './attendant.service'
import { AttendantController } from './attendant.controller'
import { Attendant, AttendantSchema } from './schema/attendant.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attendant.name, schema: AttendantSchema },
    ]),
  ],
  controllers: [AttendantController],
  providers: [AttendantService],
})
export class AttendantModule {}
