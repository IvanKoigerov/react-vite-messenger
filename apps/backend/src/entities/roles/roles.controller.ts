import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {RolesService} from './roles.service';
import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Role} from '~/entities/roles/model/role.model';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {
  }

  @Post()
  @ApiOperation({summary: 'Создание роли'})
  @ApiResponse({status: 200, type: Role})
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({summary: 'Получение всех ролей'})
  @ApiResponse({status: 200, type: [Role]})
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Получение роли по id'})
  @ApiResponse({status: 200, type: Role})
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Обновление роли по id'})
  @ApiResponse({status: 200, type: Role})
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Удаление роли по id'})
  @ApiResponse({status: 200})
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}

