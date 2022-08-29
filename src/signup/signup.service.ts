import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';

// interface user {
//   username: string;
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   userRoleName: string;
// }

@Injectable()
export class SignupService {
  constructor(@InjectModel("Signup") private signupModel: Model<User>) { }
  async signup(user: User) {
    const newUser = new this.signupModel({
      username: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
      firstName: user.firstName,
      lastName: user.lastName,
      userRoleName: user.userRoleName,
    })
    try {
      await newUser.save();
    }
    catch (error) {
      if (error.message.includes('email')) {
        throw new HttpException("Email has been taken", 404)
      }
    }
  }

}
