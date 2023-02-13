import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Authcontroller } from "./auth.controller";
import { Authservice } from "./auth.service";
import { UserSchema } from "./user.model";

@Module({
    imports:[MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),
            MongooseModule.forFeature([{name:'user',schema:UserSchema}])],
 controllers:[Authcontroller],
 providers:[Authservice],
})
export class AuthModule{}