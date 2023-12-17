import { Module } from '@nestjs/common';
import { UserModule } from '../modules/UserModule';
import { PrismaModule } from '../modules/PrismaModule';

@Module({
  imports: [UserModule, PrismaModule],
})
export class ApiModule {}
