import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsString} from 'class-validator';

export class UserWithoutPasswordDto {
  @ApiProperty({example: 'Саня', description: 'Имя пользователя'})
  @IsString()
  name: string;

  @ApiProperty({example: 'user@mail.ru', description: 'Email пользователя'})
  @IsString()
  @IsEmail()
  email: string;
}
