import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './models/user.model';
import {Role} from '~/entities/roles/model/role.model';
import {UserRoles} from '~/entities/roles/model/user_roles.model';
import {RolesModule} from '~/entities/roles/roles.module';
import {AuthModule} from '~/entities/auth/auth.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
}
