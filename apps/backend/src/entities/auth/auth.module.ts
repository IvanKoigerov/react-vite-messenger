import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {UsersModule} from '~/entities/users/users.module';
import {JwtModule} from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({
      global: true,
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {expiresIn: '72h'},
    }),
  ],
  exports: [
    AuthModule,
    JwtModule,
  ],
})
export class AuthModule {
}
