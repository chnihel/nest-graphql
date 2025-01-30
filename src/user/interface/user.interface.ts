import { Document, ObjectId } from "mongoose";
export interface Iuser extends Document{
    readonly _id:ObjectId
    readonly email:string;
    readonly password:string;
    readonly userName:string
    readonly phone:number
}