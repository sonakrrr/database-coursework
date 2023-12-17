import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from '../services/UserService';
import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UpdateUserDTO } from '../dtos/UpdateUserDTO';

@Controller('/users')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async get(
    @Param('id', ParseIntPipe) userId: number
  ) {
    return await this.userService.get(userId);
  }

  @Post()
  async create(
    @Body() dto: CreateUserDTO
  ) {
    return await this.userService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) userId: number,
    @Body() dto: UpdateUserDTO,
  ) {
    return await this.userService.update(userId, dto);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) userId: number,
  ) {
    return await this.userService.delete(userId);
  }
}
