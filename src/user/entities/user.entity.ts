import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document,Schema as MongooseSchema, ObjectId } from "mongoose";
@ObjectType()
@Schema()
export class User extends Document {
    @Field(()=>ID)
    @Prop({ type:MongooseSchema.Types.ObjectId, auto: true})
    _id:ObjectId
    @Field()
    @Prop()
    email:string
    @Field()
    @Prop()
    password:string
    @Field()
    @Prop()
    phone:number
    @Field()
    @Prop()
    userName:string
}
export const UserSchema=SchemaFactory.createForClass(User)