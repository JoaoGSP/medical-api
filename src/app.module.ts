import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConsultationModule } from './consultation/consultation.module'
import { DoctorModule } from './doctor/doctor.module'
import { UserModule } from './user/user.module'

import { PatientModule } from './patient/patient.module'

import { DatabaseModule } from './infra/mongoose/database.module'
import { MongooseModelsModule } from './schemas/mongoose-models.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseModelsModule,
    ConsultationModule,
    UserModule,
    DoctorModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
