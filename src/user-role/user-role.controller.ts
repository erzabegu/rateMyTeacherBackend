import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) { }

  @Post()
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleService.create(createUserRoleDto);
  }

  @Get()
  findAll() {
    return this.userRoleService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') id: string) {
    return this.userRoleService.findOne(id);
  }

  @Patch(':_id')
  update(@Param('_id') id: string, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.userRoleService.update(id, updateUserRoleDto);
  }

  @Delete(':_id')
  remove(@Param('_id') id: string) {
    return this.userRoleService.remove(id);
  }
}
