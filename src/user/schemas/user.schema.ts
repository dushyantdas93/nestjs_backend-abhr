
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Role } from './user.type';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required:true})
  fname: string;

   @Prop({required:true})
  lname: string;

   @Prop({required:true,unique:true})
  email: string;

   @Prop({required:true})
  password: string;

   @Prop({default:Role.Agent})
  role: string;


   @Prop({required:true})
  designation: string;

   @Prop({required:true})
  phoneNumber: string;

   @Prop({required:true})
  dob:string;

  @Prop({default:false})
  activeStatus:Boolean;

@Prop({ type: Types.ObjectId, ref: 'User',required:true })
assignPersonId: Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(User);
