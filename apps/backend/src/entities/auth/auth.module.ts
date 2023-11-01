import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UsersModule} from '~/entities/users/users.module';
import {JwtModule} from '@nestjs/jwt';
import {SequelizeModule} from '@nestjs/sequelize';
import {RefreshToken} from '~/entities/auth/model/refresh-token.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    SequelizeModule.forFeature([RefreshToken]),
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_KEY || 'SECRET',
      signOptions: {expiresIn: '2h'},
    }),
  ],
  exports: [
    AuthModule,
    JwtModule,
  ],
})
export class AuthModule {
}
