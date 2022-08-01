import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfessorDocument = professor & Document;

@Schema({ collection: 'professor' })
export class professor {
    @Prop()
    professorName: string;

    @Prop()
    professorSurname: string;

}

export const ProfessorSchema = SchemaFactory.createForClass(professor);