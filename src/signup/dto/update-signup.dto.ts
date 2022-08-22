import { PartialType } from '@nestjs/mapped-types';
import { CreateSignupDto } from './create-signup.dto';

export class UpdateSignupDto extends PartialType(CreateSignupDto) {}
