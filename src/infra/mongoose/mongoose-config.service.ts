import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose'

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
    const user = this.config.get('DB_USER')
    const password = this.config.get('DB_PASS')
    const host = this.config.get('DB_HOST')
    const database = this.config.get('DB_NAME')
    const uri = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`
    return { uri }
  }
}
