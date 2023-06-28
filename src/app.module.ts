import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { AttendantModule } from './attendant/attendant.module'
import { ClientModule } from './client/client.module'
import { ConsultationModule } from './consultation/consultation.module'
import { DoctorModule } from './doctor/doctor.module'
import { LoginModule } from './login/login.module'
import { UserModule } from './user/user.module'

const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const database = process.env.DB_NAME

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
    ),
    AttendantModule,
    ClientModule,
    ConsultationModule,
    DoctorModule,
    LoginModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
