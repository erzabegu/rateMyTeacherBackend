import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProfessorDocument = professor & Document;

@Schema({ collection: 'professor' })
export class professor {
    // @Prop()
    _id: mongoose.Types.ObjectId | string;
    @Prop()
    professorName: string;

    @Prop()
    professorSurname: string;

    @Prop()
    schoolName: string;

    @Prop()
    schoolId: string;

    @Prop()
    departments: Array<any>;

}

export const ProfessorSchema = SchemaFactory.createForClass(professor);