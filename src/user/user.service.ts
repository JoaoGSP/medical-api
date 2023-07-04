import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, User_Model } from '../schemas/user/user.schema'
import { CreateUserDto } from '../dto/user/create-user.dto'
import { UpdateUserDto } from '../dto/user/update-user.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User_Model) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
