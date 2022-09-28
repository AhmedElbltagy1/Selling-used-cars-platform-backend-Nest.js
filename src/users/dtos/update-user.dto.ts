import { Optional } from '@nestjs/common';
import {IsEmail,IsString,IsOptional} from 'class-validator';


export class UpdateUserDto {

    id : string ;

    @IsEmail()
    @IsOptional()
    email : string ;
    
    @IsString()
    password : string 
}