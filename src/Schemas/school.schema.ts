import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type SchoolDocument = School & Document;

@Schema({ collection: 'schools' })

export class School {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    schoolName: string;

    @Prop()
    schoolZip: string;

    @Prop()
    schoolLocation: string;

    @Prop()
    departments: Array<any>;

}

export const SchoolSchema = SchemaFactory.createForClass(School);