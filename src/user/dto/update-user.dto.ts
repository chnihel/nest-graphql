import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()  
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @Field(() => String, { nullable: true }) // Ajoutez explicitement @Field()
    email?: string;
  
    @Field(() => String, { nullable: true })
    password?: string;
  
    @Field(() => String, { nullable: true })
    userName?: string;
  
    @Field(() => Number, { nullable: true })
    phone?: number;
}
