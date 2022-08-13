import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserRoleDocument = UserRole & Document;

@Schema({ collection: 'userRole' })

export class UserRole {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    userRoleName: string;

}

export const UserRoleScheme = SchemaFactory.createForClass(UserRole);
