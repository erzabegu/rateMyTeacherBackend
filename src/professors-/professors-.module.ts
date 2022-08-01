import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors-.service';
import { ProfessorsController } from './professors-.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { professor, ProfessorSchema } from 'src/Schemas/professors.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: professor.name, schema: ProfessorSchema }])],
  controllers: [ProfessorsController],
  providers: [ProfessorsService]
})
export class ProfessorsModule { }
