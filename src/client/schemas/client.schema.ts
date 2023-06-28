import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type ClientDocument = HydratedDocument<Client>

@Schema()
export class Client {}

export const ClientSchema = SchemaFactory.createForClass(Client)

export const Client_Model = Client.name
