import {AutoIncrement, BelongsToMany, Column, ForeignKey, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';
import {User} from '~/entities/users/models/user.model';
import {Role} from '~/entities/roles/model/role.model';

@Table({tableName: 'user_roles'})
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ApiProperty({example: 'admin', description: 'Название роли'})
  @ForeignKey(() => Role)
  @Column
  declare roleId: string;

  @ApiProperty({example: 'admin', description: 'Название роли'})
  @ForeignKey(() => User)
  @Column
  declare userId: string;
}
