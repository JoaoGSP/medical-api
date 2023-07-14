import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDocument, User_Model } from '@contracts/schemas/user/user.schema'
import { CreateUserDto } from '@contracts/dtos/user/create-user.dto'
import { UpdateUserDto } from '@contracts/dtos/user/update-user.dto'
import { AccountLoginDto } from '@/contracts/dtos/login/account-login.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User_Model) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDto)
    return createdUser.save()
  }

  async login(accountLoginDto: AccountLoginDto) {
    const { email, password } = accountLoginDto

    const user = await this.userModel.find({ email: email, password: password }).exec()

    return user
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec()
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec()
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(id, updateUserDto).exec()
    return updatedUser
  }

  remove(id: string) {
    const removedUser = this.userModel.findByIdAndDelete(id).exec()
    return removedUser
  }
}
