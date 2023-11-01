import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {InjectModel} from '@nestjs/sequelize';
import {Role} from '~/entities/roles/model/role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private readonly userModel: typeof Role,
  ) {
  }

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.userModel.create(createRoleDto);
  }

  findAll(): Promise<Role[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<Role> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const user = await this.findOne(id);
    return user.update(updateRoleDto);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
