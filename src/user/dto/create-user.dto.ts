import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
@InputType()
export class CreateUserDto {
    @Field(()=>String)
    @IsString()
    @IsNotEmpty()
    email:string
    @Field(()=>String)
    @IsString()
    @IsNotEmpty()
    password:string
    @Field(()=>String)
    @IsString()
    userName:string
    @Field(()=>Number)
    @IsNumber()
    @Type(()=>Number)
    phone:number
}
