import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ProfessorsModule } from './professors/professors.module';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [SchoolsModule, MongooseModule.forRoot('mongodb://localhost:27017/rateTeacher'), ProfessorsModule, UsersModule, QuestionsModule, DepartmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
