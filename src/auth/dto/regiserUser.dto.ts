

import { IsEmail,  IsString, } from 'class-validator';
export class RegisterDto {

@IsString()
fname:string;


@IsString()
lname:string;
    
@IsEmail()
email:string;

@IsString()
phoneNumber:string;

@IsString()
password:string;

@IsString()
dob:string;


@IsString()
designation:string;

@IsString()
assignPersonId:string;


}



export class LoginDto {

email:string;

password:string;


}