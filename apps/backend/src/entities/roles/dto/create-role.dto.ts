import {ApiProperty} from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({example: 'admin', description: 'Название роли'})
  name: string;
}
