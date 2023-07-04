import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModel, UserSchema } from '../schemas/user/user.schema'
import {
  AttendantSchema,
  Attendant_Model,
} from 'src/attendant/schema/attendant.schema'
import { ClientSchema, Client_Model } from 'src/client/schemas/client.schema'
import { DoctorSchema, Doctor_Model } from 'src/schemas/doctor/doctor.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel,
        schema: UserSchema,
        discriminators: [
          { name: Attendant_Model, schema: AttendantSchema },
          { name: Client_Model, schema: ClientSchema },
          { name: Doctor_Model, schema: DoctorSchema },
        ],
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
