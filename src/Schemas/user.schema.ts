import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })

export class User {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop()
    roleID: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
