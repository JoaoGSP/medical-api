import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { AttendantSchema } from 'src/attendant/schema/attendant.schema'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true, discriminatorKey: '_role' })
export class User {
  @Prop()
  id: number
  @Prop()
  name: string
  @Prop()
  gender: string
  @Prop({ type: Date, default: Date.now })
  birth_date: Date
  @Prop()
  phone_number: number
  @Prop()
  address: {
    zip_code: number
    firstLine: string
    secondLine: string
    city: string
    country: string
  }
}

export const UserSchema = SchemaFactory.createForClass(User)

export const User_Model = User.name
