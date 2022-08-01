import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })

export class User {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    userName: string;

    @Prop()
    userSurname: string;

    @Prop()
    userRole: string;

    @Prop()
    UserSchool: string;

}

export const UserSchema = SchemaFactory.createForClass(User);