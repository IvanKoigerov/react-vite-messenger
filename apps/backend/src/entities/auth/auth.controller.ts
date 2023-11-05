import {Controller, Post, Body, Get, Res, Req} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginDto, LoginReturnDto} from './dto/login.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from '~/entities/users/dto/create-user.dto';
import {Request, Response} from 'express';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @ApiOperation({summary: 'Авторизация'})
  @ApiResponse({status: 200, type: LoginReturnDto})
  @Post('/login')
  async login(@Body() createAuthDto: LoginDto, @Res() res: Response) {
    res.json(await this.authService.login(createAuthDto, res));
  }


  @ApiOperation({summary: 'Регистрация'})
  @ApiResponse({status: 200, type: LoginReturnDto})
  @Post('/registration')
  async registration(@Body() createAuthDto: CreateUserDto, @Res() res: Response) {
    return res.json(await this.authService.registration(createAuthDto, res));
  }


  @ApiOperation({summary: 'Выход пользователя'})
  @ApiResponse({status: 201})
  @Post('/logout')
  async logout(@Res() res: Response, @Req() req: Request) {
    return res.json(await this.authService.logout(res, req));
  }


  @ApiOperation({summary: 'Обновление refreshToken и accessToken'})
  @ApiResponse({status: 200, type: LoginReturnDto})
  @Post('/refresh')
  async refresh(@Res() res: Response, @Req() req: Request) {
    return res.json(await this.authService.refresh(res, req));
  }
}
