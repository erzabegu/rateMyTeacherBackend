import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type ProfessorDocument = Professor & Document;

@Schema({ collection: 'professor' })

export class Professor {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    professorName: string;

    @Prop()
    professorSurname: string;

    @Prop()
    professorDepartment: string;

    @Prop()
    professorSchool: string;

    @Prop()
    professorRatingStars: string;

}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);