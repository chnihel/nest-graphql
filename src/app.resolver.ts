import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "./user/user.service";
import { User, UserSchema } from "./user/entities/user.entity";
import { Iuser } from "./user/interface/user.interface";
import { CreateUserDto } from "./user/dto/create-user.dto";
import { UpdateUserDto } from "./user/dto/update-user.dto";

@Resolver(() => User)
export class AppResolver {
    constructor(private readonly userService: UserService) { }
    @Query(() => [User])
    async getUsers(): Promise<Iuser[]> {
        return this.userService.findAll()
    }
    @Mutation(() => User)
    async createUser(@Args('createUserDto') CreateUserDto:CreateUserDto): Promise<User> {
        return this.userService.create(CreateUserDto)
    }
    @Mutation(() => Boolean)
    async deleteData(@Args('userId',{type:()=>ID}) userId:string):Promise<boolean>{
        return this.userService.deleteData(userId)
    }
    @Mutation(() => User)
  async updateUser(
    @Args('userId', { type: () => ID }) userId: string, 
    @Args('updateUserDto') updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateData(userId, updateUserDto);
  }
}
