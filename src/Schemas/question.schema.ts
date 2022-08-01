import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ collection: 'questions' })

export class Question {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    question: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);