import {Module} from '@nestjs/common';
import {RolesService} from './roles.service';
import {RolesController} from './roles.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {Role} from '~/entities/roles/model/role.model';
import {User} from '~/entities/users/models/user.model';
import {UserRoles} from '~/entities/roles/model/user_roles.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {
}
