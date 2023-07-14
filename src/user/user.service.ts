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
