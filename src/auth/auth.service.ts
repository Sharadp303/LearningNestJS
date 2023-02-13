import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import { Model } from "mongoose";
import {InjectModel} from "@nestjs/mongoose"
import { User,UserDocument } from "./user.model";
@Injectable()
export class Authservice{
constructor(@InjectModel('user') private userModel:Model<UserDocument> ){}
   
//SignUp
async signup(dto:AuthDto){
    return this.userModel.create({
        email:dto.email,
        password:dto.password
    })
           
    }
    

 //signIn 
 
 async signin(dto:User){
    const newuser=this.userModel.findOne(dto)
    return newuser;
 }
}