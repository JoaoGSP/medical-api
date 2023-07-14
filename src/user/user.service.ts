import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDocument, User_Model } from '@contracts/schemas/user/user.schema'
import { CreateUserDto } from '@contracts/dtos/user/create-user.dto'
import { UpdateUserDto } from '@contracts/dtos/user/update-user.dto'
import { AccountLoginDto } from '@/contracts/dtos/login/account-login.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel(User_Model) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userModel.findOne({ email: createUserDto.email }).exec()
    if (userExists) {
      throw new Error('User is already registered!!')
    }
    const userToBeCreated = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    }
    const createdUser = await new this.userModel(userToBeCreated).save()
    return `User has been registered!! \n${createdUser.name}`
  }

  async login(accountLoginDto: AccountLoginDto): Promise<string> {
    const { email, password } = accountLoginDto
    let isPasswordValid = false
    const user = await this.userModel.findOne({ email: email }).exec()
    if (!user) {
      console.log(`Invalid credentials for the given Email Id :${email}`)
    }
    isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      console.error('Incorrect Password')
    }
    return `${user.name} is now logged!`
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
