import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema({ collection: 'departments' })

export class Department {
    // @Prop()
    _id: mongoose.Types.ObjectId;

    @Prop()
    departmentName: string;

}

export const DepartmentSchema = SchemaFactory.createForClass(Department);