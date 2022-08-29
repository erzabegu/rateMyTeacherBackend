import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })

export class User {
    // @Prop()
    // _id: mongoose.Types.ObjectId;

    @Prop({ type: String })
    username: string;

    @Prop({ unique: true, type: String })
    email: string;

    @Prop({ type: String })
    password: string;

    @Prop({ type: String })
    firstName: string;

    @Prop({ type: String })
    lastName: string;

    @Prop({ type: String })
    userRoleName: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
