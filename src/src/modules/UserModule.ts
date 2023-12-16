import { Module } from '@nestjs/common';
import { UserController } from '../api/controllers/UserController';
import { UserService } from '../api/services/UserService';
import { UserRepository } from '../database/repositories/UserRepository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}