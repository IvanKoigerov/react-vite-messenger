import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsObject, IsString, Length} from 'class-validator';
import {UserWithoutPasswordDto} from '~/entities/users/dto/user-without-password.dto';

export class LoginDto {
  @ApiProperty({example: 'user@mail.ru', description: 'Email пользователя'})
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({example: 'password', description: 'Пароль пользователя'})
  @IsString()
  @Length(4, 20)
  password: string;
}

export class LoginReturnDto {
  @ApiProperty({example: 'pew9mn11cvmj0s7sb6xby9iwbwtwtjhk', description: 'Refresh Token'})
  @IsString()
  refreshToken: string;

  @ApiProperty({example: 'pew9mn11cvmj0s7sb6xby9iwbwtwtjhk', description: 'Access Token'})
  @IsString()
  accessToken: string;

  @ApiProperty({example: '{ name: Саша, email: user@mail.ru }', description: 'Access Token'})
  @IsObject()
  user: UserWithoutPasswordDto;
}
