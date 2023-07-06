import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { Address, AddressSchema } from '@contracts/schemas/common/address.schema'

@Schema({ timestamps: true, discriminatorKey: '_role' })
export class User {
  @Prop()
  id?: number

  @Prop()
  name?: string

  @Prop()
  email?: string

  @Prop()
  password?: string

  @Prop()
  gender?: string

  @Prop({ type: Date, default: Date.now })
  birth_date?: Date

  @Prop()
  phone_number?: number

  @Prop({ type: AddressSchema })
  address?: Address
}

export type UserDocument = HydratedDocument<User>

export const UserSchema = SchemaFactory.createForClass(User)

export const User_Model = User.name
