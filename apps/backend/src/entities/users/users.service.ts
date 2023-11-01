import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectModel} from '@nestjs/sequelize';
import {User} from '~/entities/users/models/user.model';
import {RolesService} from '~/entities/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly rolesService: RolesService,
  ) {
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll({include: {all: true}});
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  findUserByEmail(email: string) {
    return this.userModel.findOne({where: {email}, include: {all: true}});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    return user.update(updateUserDto);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
