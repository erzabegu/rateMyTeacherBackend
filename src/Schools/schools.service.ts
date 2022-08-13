import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { School, SchoolDocument } from 'src/schemas/school.schema';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SchoolsService {
  constructor(@InjectModel(School.name) private schoolModel: Model<SchoolDocument>) { }

  async create(createSchoolDto: CreateSchoolDto): Promise<School> {
    return new this.schoolModel(createSchoolDto).save();
  }

  findAll() {
    return this.schoolModel.find();
  }

  async findOne(id: string) {
    return this.schoolModel.findById(id).exec();
  }

  async update(id: string, updateSchoolDto: UpdateSchoolDto) {
    return this.schoolModel.findByIdAndUpdate(id, updateSchoolDto).exec();
  }

  async remove(id: string) {
    return this.schoolModel.deleteOne({ id });
  }
}


