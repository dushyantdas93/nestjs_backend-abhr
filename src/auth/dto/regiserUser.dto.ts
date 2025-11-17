

import { IsEmail, IsNotEmpty, isString } from 'class-validator';
export class RegisterDto {

fname:string;


lname:string;
    
@IsEmail()
email:string;


password:string;


}

export class LoginDto {

email:string;

password:string;


}