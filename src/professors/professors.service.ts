import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfessorDocument } from 'src/Schemas/professors.schema';
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

  update(id: string, updateProfessorDto: UpdateProfessorDto) {
    return this.professorModel.findByIdAndUpdate(id, updateProfessorDto).exec();
  }

  remove(id: string) {
    return this.professorModel.deleteOne({ id });
  }
}
