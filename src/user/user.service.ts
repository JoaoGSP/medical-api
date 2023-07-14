import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UserDocument, User_Model } from '@contracts/schemas/user/user.schema'
import { CreateUserDto } from '@contracts/dtos/user/create-user.dto'
import { UpdateUserDto } from '@contracts/dtos/user/update-user.dto'
import { AccountLoginDto } from '@/contracts/dtos/login/account-login.dto'
import bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel(User_Model) private userModel: Model<UserDocument>) {}

  //Voltar aqui e corrigir o uso do bcrypt e outras funcionalidades na criação dos usuários...
  async create(createUserDto: CreateUserDto) {
    return await bcrypt.hash(createUserDto.password, 10)
    // const userExists = this.userModel.find({ email: createUserDto.email }).exec()
    // if (userExists) {
    //   console.log('User is already register!!')
    // }
    // console.log('her', bcrypt.hash('pas', 10))
    // const userToBeCreated = {
    //   ...createUserDto,
    //   password: bcrypt.hashSync(createUserDto.password, 10),
    // }
    // const createdUser = await new this.userModel(userToBeCreated).save()
    // return createdUser
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
