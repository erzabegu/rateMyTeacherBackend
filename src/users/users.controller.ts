import { Controller, Get, Post, Body, Put, Param, Delete, BadRequestException, Res, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { Response } from 'express'
import { MailerService } from '@nestjs-modules/mailer';
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: '0.0.0.0',
  port: 8025,
  service: "Gmail",
  auth: {
    user: 'erzabegu3@gmail.com',
    pass: 'hgzdhqwpjgklzuqu'
  }
})


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private jwtService: JwtService,
    private mailerService: MailerService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string) {
    const user = await this.usersService.findOne({ email });
    if (!user[0]) {
      throw new BadRequestException('invalid credentials');
    }
    if (!await bcrypt.compare(password && password, user[0]?.password)) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user[0].id })

    // response.cookie('jwt', jwt, { httpOnly: true });

    return {
      jwt,
      user,
    }
  }

  @Post('forget')
  async forgot(@Body('email') email: string) {
    const token = Math.random().toString(20).substring(2, 12);
    // const url = `http://localhost:3000/reset/${token}`
    const url = `http://localhost:3000/reset/${email}`
    await transporter.sendMail({
      from: "ereza.begu@umib.net",
      to: email,
      subject: 'Reset password',
      html: `<h1>Click <a href=${url}>here</a> to reset password</h1> `
    })
    return {
      message: "please check email"
    }
  }

  @Post("reset")
  async reset(@Body('email') email: string,
    @Body('password') password: string) {
    const user = await this.usersService.findOne({ email });
    if (user.length === 0) {
      throw new NotFoundException("User not found")
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    await this.usersService.update(user[0]?.id, { password: hashedPassword });
    return {
      message: 'success'
    }
  }


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':_id')
  update(@Param('_id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':_id')
  remove(@Param('_id') id: string) {
    return this.usersService.remove(id);
  }
}
