import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {LoginDto} from './dto/login.dto';
import {UsersService} from '~/entities/users/users.service';
import {JwtService} from '@nestjs/jwt';
import {compare, hash} from 'bcryptjs';
import {User} from '~/entities/users/models/user.model';
import {CreateUserDto} from '~/entities/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findUserByEmail(loginDto.email);
    const passwordEquals = await compare(loginDto.password, user?.password);

    if (!user || !passwordEquals) throw new UnauthorizedException('Нет такого пользователя или неправильный пароль');

    return this.generateToken(user);
  }

  async logout() {
    return 'This action returns all auth';
  }

  async registration(registrationDto: CreateUserDto) {
    const newUser = await this.usersService.findUserByEmail(registrationDto.email);
    if (newUser) throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);

    const hashPassword = await hash(registrationDto.password, 5);

    const user = await this.usersService.create({...registrationDto, password: hashPassword});

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
