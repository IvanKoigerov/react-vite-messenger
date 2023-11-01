import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString, Length} from 'class-validator';

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
