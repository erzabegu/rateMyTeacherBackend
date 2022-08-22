import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ProfessorDocument } from 'src/Schemas/professors.schema';
import { ObjectID } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorsService {

  constructor(@InjectModel(Professor.name) private professorModel: Model<ProfessorDocument>) { }

  create(createProfessorDto: CreateProfessorDto) {
    return new this.professorModel(createProfessorDto).save();
  }

  findAll() {
    return this.professorModel.find();
  }

  findOne(id: string) {
    return this.professorModel.findOne({ id });
  }

  async findByName(professorName: string) {
    const s = 'cool'
    const regex = new RegExp(professorName, 'i') // i for case insensitive
    return await this.professorModel.find({ professorName: { $regex: regex } }).exec();
  }

  update(id: string, updateProfessorDto: UpdateProfessorDto) {
    return this.professorModel.findByIdAndUpdate(id, updateProfessorDto).exec();
  }

  remove(id: string) {
    return this.professorModel.deleteOne({ id });
  }
}
