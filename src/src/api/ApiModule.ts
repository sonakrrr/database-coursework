import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/PrismaModule';
import { ProjectModule } from './modules/ProjectModule';

@Module({
  imports: [PrismaModule, ProjectModule],
})
export class ApiModule { }
