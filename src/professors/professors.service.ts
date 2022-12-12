import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfessorDocument } from 'src/Schemas/professors.schema';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorsService {
  constructor(
    @InjectModel(Professor.name)
    private professorModel: Model<ProfessorDocument>,
  ) {}

  create(createProfessorDto: CreateProfessorDto) {
    return new this.professorModel(createProfessorDto).save();
  }

  findAll() {
    return this.professorModel.find();
  }

  async findOne(id: string) {
    return this.professorModel.findById(id).exec();
  }

  async showResults(id: string) {
    const prof = this.professorModel.findById(id).exec();
    const professor = (await prof).ratings;
    const rateYourProfessor = {
      twenty: 0,
      fourty: 0,
      sixty: 0,
      eighty: 0,
      onehundred: 0,
    };
    const difficulty = {
      _twenty: 0,
      _fourty: 0,
      _sixty: 0,
      _eighty: 0,
      _onehundred: 0,
    };
    const takeAgain = { yes: 0, no: 0 };
    const materials = { yes: 0, no: 0 };
    const textArea = [];
    professor.map((question) => {
      if (question.questionType === 'RateYourProfessor') {
        if (question.response === 20) {
          rateYourProfessor.twenty++;
        } else if (question.response === 40) {
          rateYourProfessor.fourty++;
        } else if (question.response === 60) {
          rateYourProfessor.sixty++;
        } else if (question.response === 80) {
          rateYourProfessor.eighty++;
        } else if (question.response === 100) {
          rateYourProfessor.onehundred++;
        }
      }
      if (question.questionType === 'difficult') {
        if (question.response === 20) {
          difficulty._twenty++;
        } else if (question.response === 40) {
          difficulty._fourty++;
        } else if (question.response === 60) {
          difficulty._sixty++;
        } else if (question.response === 80) {
          difficulty._eighty++;
        } else if (question.response === 100) {
          difficulty._onehundred++;
        }
      }
      if (question.questionType === 'takeAgain') {
        if (question.response === 'yes') {
          takeAgain.yes++;
        } else {
          takeAgain.no++;
        }
      }
      if (question.questionType === 'materials') {
        if (question.response === 'yes') {
          materials.yes++;
        } else {
          materials.no++;
        }
      }
      if (question.questionType === 'textarea') {
        textArea.push(question.response);
      }
    });

    const numberOfRatings =
      rateYourProfessor.twenty +
      rateYourProfessor.fourty +
      rateYourProfessor.eighty +
      rateYourProfessor.sixty +
      rateYourProfessor.onehundred;
    const quality =
      (rateYourProfessor.twenty +
        rateYourProfessor.fourty * 2 +
        rateYourProfessor.eighty * 4 +
        rateYourProfessor.sixty * 3 +
        rateYourProfessor.onehundred * 5) /
      numberOfRatings;
    return {
      rateMyTeacher: {
        twenty: rateYourProfessor.twenty,
        fourty: rateYourProfessor.fourty,
        sixty: rateYourProfessor.sixty,
        eighty: rateYourProfessor.eighty,
        oneHundred: rateYourProfessor.onehundred,
      },
      difficult: {
        _twenty: difficulty._twenty,
        _fourty: difficulty._fourty,
        _sixty: difficulty._sixty,
        _eighty: difficulty._eighty,
        _onehundred: difficulty._onehundred,
      },
      takeAgain: { takeAgainYes: takeAgain.yes, takeAgainNo: takeAgain.no },
      materials: { materialsNo: materials.no, materialYes: materials.yes },
      textArea: textArea,
      quality: quality,
      numberOfRatings: numberOfRatings,
    };
  }

  async findByName(professorName: string) {
    return await this.professorModel
      .find({ professorName: { $regex: new RegExp(professorName, 'i') } })
      .exec();
  }

  update(id: string, updateProfessorDto: UpdateProfessorDto) {
    return this.professorModel.findByIdAndUpdate(id, updateProfessorDto).exec();
  }

  remove(id: string) {
    return this.professorModel.deleteOne({ id });
  }

  async getBySchoolName(professorSchool) {
    return await this.professorModel
      .find({ schoolName: { $regex: new RegExp(professorSchool.toString(), 'i') } })
      .exec();
  }
}
