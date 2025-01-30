import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { Iuser } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userModule:Model<User> ){}
  async create(createUserDto: CreateUserDto):Promise<Iuser> {
      const newUser=await new this.userModule(createUserDto)
       return   newUser.save();
  }

  async findAll():Promise<Iuser[]> {
    const getAllUser=await this.userModule.find()
       return getAllUser
    }

  async deleteData(userId:string):Promise<boolean>{
    const dataDeleted=await this.userModule.findByIdAndDelete(userId)
    if(!dataDeleted){
      throw new NotFoundException(`user with ${userId} not found`)
    }
    return true
  }
  async updateData(userId:string,updateUserDto:UpdateUserDto):Promise<Iuser>{
    const upDateUser=await this.userModule.findByIdAndUpdate(userId,updateUserDto,{new:true})
    if(!upDateUser){
      throw new NotFoundException(`user with ${userId} not found`)
    }
    return upDateUser
  }

}
