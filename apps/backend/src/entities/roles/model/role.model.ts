import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {User} from '~/entities/users/models/user.model';
import {UserRoles} from '~/entities/roles/model/user_roles.model';

interface RoleModalAttr {
  email: string;
  name: string;
  password: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleModalAttr> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ApiProperty({example: 'admin', description: 'Название роли'})
  @Column
  declare name: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
