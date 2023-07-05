import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose'

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const user = process.env.DB_USER
    const password = process.env.DB_PASS
    const host = process.env.DB_HOST
    const database = process.env.DB_NAME
    const uri = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
    return { uri }
  }
}
