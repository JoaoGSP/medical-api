import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'

const user = process.env.DB_USER
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const database = process.env.DB_NAME

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
