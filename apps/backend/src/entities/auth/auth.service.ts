import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '~/entities/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { User } from '~/entities/users/models/user.model';
import { CreateUserDto } from '~/entities/users/dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RefreshToken } from '~/entities/auth/model/refresh-token.model';
import { Request, Response } from 'express';
import { omit } from 'lodash';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(RefreshToken)
    private readonly refreshTokenModel: typeof RefreshToken,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService) {
  }

  async login(loginDto: LoginDto, res: Response) {
    const user = await this.usersService.findUserByEmail(loginDto.email);

    if (!loginDto.password && !user.password) throw new UnauthorizedException('Нет такого пользователя или неправильный пароль');

    const passwordEquals = await compare(loginDto.password, user.password);

    if (!user || !passwordEquals) throw new UnauthorizedException('Нет такого пользователя или неправильный пароль');

    return this.generateTokens(user, res);
  }

  async logout(res: Response, req: Request) {
    const {refreshToken} = req.cookies;

    if (!refreshToken) return;

    await this.deleteRefreshTokenByToken(refreshToken);
    res.clearCookie('refreshToken');
  }

  async registration(registrationDto: CreateUserDto, res: Response) {
    const newUser = await this.usersService.findUserByEmail(registrationDto.email);
    if (newUser) throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);

    const hashPassword = await hash(registrationDto.password, 5);
    const user = await this.usersService.create({...registrationDto, password: hashPassword});

    return await this.generateTokens(user, res);
  }

  private async generateTokens(user: User, res?: Response) {

    const refreshToken = await this.jwtService.signAsync({id: user.id}, {
      secret: process.env.REFRESH_KEY,
      expiresIn: '60d',
    });
    await this.refreshTokenModel.create({
      refreshToken: refreshToken,
      userId: user.id,
    });

    res.cookie('refreshToken', refreshToken, {httpOnly: true, secure: true, maxAge: 60 * 24 * 60 * 60 * 1000});
    return {
      accessToken: this.jwtService.sign({
        id: user.id,
        email: user.email,
        name: user?.name,
        roles: user?.roles,
      }),
      refreshToken,
      user: omit(user.dataValues, 'password'),
    };
  }

  async findRefreshTokenByToken(refreshToken: string) {
    return this.refreshTokenModel.findOne({
      where: {
        refreshToken,
      },
    });
  }

  async deleteRefreshTokenByToken(refreshToken: string) {
    const foundToken = await this.findRefreshTokenByToken(refreshToken);
    await foundToken.destroy();
  };

  async refresh(res: Response, req: Request) {
    const {refreshToken} = req.cookies;
    if (!refreshToken) throw new UnauthorizedException();

    const dataRefreshToken = await this.validateRefreshToken(refreshToken);
    const dataTokenModel = await this.findRefreshTokenByToken(refreshToken);

    if (!dataRefreshToken || !dataTokenModel) throw new UnauthorizedException();

    await this.deleteRefreshTokenByToken(refreshToken);
    const user = await this.usersService.findOne(dataTokenModel.userId);

    return this.generateTokens(user, res);
  }

  async validateRefreshToken(token: string) {
    return this.jwtService.verify(token, {secret: process.env.REFRESH_KEY});
  }
}
