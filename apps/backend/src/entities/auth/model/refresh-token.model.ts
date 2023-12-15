import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({tableName: 'refresh_tokens', underscored: true})
export class RefreshToken extends Model<RefreshToken> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ApiProperty({example: '1', description: 'ID Пользователя'})
  @Column
  userId: number;

  @ApiProperty({example: '1ewgmbdklwpe.ewrwrer.fpbkofdgds', description: 'refreshToken'})
  @Column
  refreshToken: string;
}
