import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from '~/entities/users/users.module';
import {User} from '~/entities/users/models/user.model';
import {RolesModule} from '~/entities/roles/roles.module';
import {Role} from '~/entities/roles/model/role.model';
import {UserRoles} from '~/entities/roles/model/user_roles.model';
import {AuthModule,AuthModule} from '~/entities/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {
}
