import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) { }


  @Post()
  create(@Body() createSchoolDto: CreateSchoolDto) {
    return this.schoolsService.create(createSchoolDto);
  }

  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') id: string) {
    return this.schoolsService.findOne(id);
  }

  @Put(':_id')
  update(@Param('_id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return this.schoolsService.update(id, updateSchoolDto);
  }

  @Delete(':_id')
  remove(@Param('_id') id: string) {
    return this.schoolsService.remove(id);
  }
}
