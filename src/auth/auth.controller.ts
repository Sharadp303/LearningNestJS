import { Controller ,Body,Post} from "@nestjs/common";
import { Authservice } from "./auth.service";
import { AuthDto } from "./dto";
import { User } from "./user.model";

@Controller('auth')

export class Authcontroller{
    constructor(private authservice:Authservice){}
@Post('signup')
signup(@Body() dto:AuthDto){
    return this.authservice.signup(dto);
}
@Post('signin')
signin(@Body() dto:User){
    return this.authservice.signin(dto);
}

}