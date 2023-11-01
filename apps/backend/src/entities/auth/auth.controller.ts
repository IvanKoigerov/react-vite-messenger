import {Controller, Post, Body} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginDto} from './dto/login.dto';
import {ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from '~/entities/users/dto/create-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('/login')
  login(@Body() createAuthDto: LoginDto) {
    return this.authService.login(createAuthDto);
  }

  @Post('/registration')
  registration(@Body() createAuthDto: CreateUserDto) {
    return this.authService.registration(createAuthDto);
  }

  // @Post('/logout')
  // logout(@Body() createAuthDto: RegistrationDto) {
  //   return this.authService.logout(createAuthDto);
  // }
}
