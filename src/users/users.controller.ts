import { Controller,Post,Get,Param,Patch,Delete,Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {
    constructor(private _userService :UsersService){}

    @Post('/signup')
    CreateUser(@Body() body:CreateUserDto){
        this._userService.create(body.email,body.password)
        
    }
    
}
