import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const schools = new mongoose.Schema({
    schoolName: String,
    schoolLocation: String,
    schoolZip: Number
});

export interface SchoolsModel extends Document {
    schoolName: string;
    schoolLocation: string;
    schoolZip: number;
}