import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiTags('User')
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Delete('/:id')
  async removeData(@Res() response,@Param('id') userId:string){
    try {
      const deletedUser=await this.userService.deleteData(userId)
      return response.status(HttpStatus.OK).json({
        message:'user deleted successfuly',
        deletedUser
      })
    } catch (error) {
      return response.status(error.status).json({
        message:"user not deleted"+error,
      })
      
    }
  }

  @Put("/:id")
  async updateUser(@Res() response,@Param('userId') userId:string,@Body() updateUserDto:UpdateUserDto){
    try {
      const updateDataUser=await this.userService.updateData(userId,updateUserDto)
      return response.status(HttpStatus.ACCEPTED).json({
        message:"user updated successfully",
        updateDataUser
      })
    } catch (error) {
      return response.status(error.status).json({
        message:"user not updated"+error,
      })
    }
  }

  
}
