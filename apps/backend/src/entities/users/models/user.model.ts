import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {Role} from '~/entities/roles/model/role.model';
import {UserRoles} from '~/entities/roles/model/user_roles.model';

interface UserModalAttr {
  email: string;
  name: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserModalAttr> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ApiProperty({example: 'Саня', description: 'Имя пользователя'})
  @Column
  declare name: string;

  @ApiProperty({example: 'user@mail.ru', description: 'Email пользователя'})
  @Unique
  @Column
  declare email: string;

  @ApiProperty({example: 'password', description: 'Пароль пользователя'})
  @Column
  declare password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
