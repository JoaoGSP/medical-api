import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ConsultationModule } from './consultation/consultation.module'
import { DoctorModule } from './doctor/doctor.module'
import { UserModule } from './user/user.module'
import { PatientController } from './patient/patient.controller'
import { PatientModule } from './patient/patient.module'

const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const database = process.env.DB_NAME

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
    ),
    ConsultationModule,
    DoctorModule,
    UserModule,
    PatientModule,
  ],
  controllers: [AppController, PatientController],
  providers: [AppService],
})
export class AppModule {}
