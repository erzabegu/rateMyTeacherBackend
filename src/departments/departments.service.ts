import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DepartmentDocument } from 'src/schemas/department.schema';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(@InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>) { }

  create(createDepartmentDto: CreateDepartmentDto) {
    return new this.departmentModel(createDepartmentDto).save();
  }

  findAll() {
    return this.departmentModel.find();
  }

  async findOne(id: string) {
    return this.departmentModel.findById(id).exec();
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto).exec();
  }

  async remove(id: string) {
    return this.departmentModel.deleteOne({ id });
  }
}
