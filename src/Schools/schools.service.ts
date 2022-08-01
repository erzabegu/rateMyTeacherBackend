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

  async findAll() {
    return this.schoolModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: string, updateSchoolDto: UpdateSchoolDto) {
    return this.schoolModel.updateOne({ id }, { $set: { ...updateSchoolDto } })
  }

  remove(id: string) {
    return this.schoolModel.deleteOne({ id });
  }
}


