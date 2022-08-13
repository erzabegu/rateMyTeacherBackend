import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRoleDocument } from 'src/Schemas/userRole.schema';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UserRole } from './entities/user-role.entity';

@Injectable()
export class UserRoleService {
  constructor(@InjectModel(UserRole.name) private userRoleModel: Model<UserRoleDocument>) { }

  async create(createUserRoleDto: CreateUserRoleDto) {
    return new this.userRoleModel(createUserRoleDto).save();
  }

  findAll() {
    return this.userRoleModel.find();
  }

  findOne(id: string) {
    return this.userRoleModel.findById(id).exec();
  }

  update(id: string, userRoleModel: UpdateUserRoleDto) {
    return this.userRoleModel.findByIdAndUpdate(id, userRoleModel).exec();
  }

  remove(id: string) {
    return this.userRoleModel.findOneAndDelete({ id })
  }
}
