import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Professor } from './entities/professor.entity';
import { ProfessorSchema } from 'src/Schemas/professors.schema';
// import { Professor, ProfessorSchema } from 'src/schemas/professor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Professor.name, schema: ProfessorSchema }])],
  controllers: [ProfessorsController],
  providers: [ProfessorsService]
})
export class ProfessorsModule { }
