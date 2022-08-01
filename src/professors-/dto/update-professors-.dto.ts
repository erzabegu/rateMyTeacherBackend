import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessorDto } from './create-professors-.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {}
