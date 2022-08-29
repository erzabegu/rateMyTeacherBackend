import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from 'src/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from "@nestjs-modules/mailer"


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  MailerModule.forRoot({
    transport: {
      host: '0.0.0.0',
      port: 8025,
      secure: true,
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      }
    },

    defaults: {
      from: "admin@gmail.com"
    }
  }),
  JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } })],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
