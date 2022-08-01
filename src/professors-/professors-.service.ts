import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { professor, ProfessorDocument } from 'src/Schemas/professors.schema';
import { CreateProfessorDto } from './dto/create-professors-.dto';
import { UpdateProfessorDto } from './dto/update-professors-.dto';

@Injectable()
export class ProfessorsService {
  constructor(@InjectModel(professor.name) private professorModel: Model<ProfessorDocument>) { }

  async create(createProfessorDto: CreateProfessorDto): Promise<professor> {
    return new this.professorModel(createProfessorDto).save();
  }

  findAll() {
    return this.professorModel.find();
  }

  findOne(professorName: string) {
    return this.professorModel.findOne({ professorName });
  }

  update(id: number, updateProfessorDto: UpdateProfessorDto) {
    return `This action updates a #${id} professor`;
  }

  remove(id: number) {
    return `This action removes a #${id} professor`;
  }
}
