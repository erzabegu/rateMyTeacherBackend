import { Controller, Get, Post, Body, Put, Param, Delete, BadRequestException, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { Response } from 'express'


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private jwtService: JwtService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response) {
    const user = await this.usersService.findOne({ email });
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (!await bcrypt.compare(password, user[0]?.password)) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user[0].id })

    // response.cookie('jwt', jwt, { httpOnly: true });

    return {
      jwt
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
