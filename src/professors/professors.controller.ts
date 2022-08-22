import { Controller, Get, Post, Body, Patch, Param, Put, Delete } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) { }

  @Post()
  create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorsService.create(createProfessorDto);
  }

  @Get()
  findAll() {
    return this.professorsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') id: string) {
    return this.professorsService.findOne(id);
  }

  @Get('/byName/:professorName')
  findByName(@Param('professorName') professorName: string) {
    return this.professorsService.findByName(professorName);
  }

  @Put(':_id')
  update(@Param('_id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professorsService.update(id, updateProfessorDto);
  }

  @Delete(':_id')
  remove(@Param('_id') id: string) {
    return this.professorsService.remove(id);
  }
}
