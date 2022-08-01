import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfessorsService } from './professors-.service';
import { CreateProfessorDto } from './dto/create-professors-.dto';
import { UpdateProfessorDto } from './dto/update-professors-.dto';

@Controller('professor')
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

  @Get(':professorName')
  findOne(@Param('professorName') professorName: string) {
    return this.professorsService.findOne(professorName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professorsService.update(+id, updateProfessorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professorsService.remove(+id);
  }
}
