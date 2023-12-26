import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/PrismaModule';
import { ProjectController } from './controllers/ProjectController';
import { ProjectService } from './services/ProjectService';
import { ProjectModule } from './modules/ProjectModule';

@Module({
  imports: [PrismaModule, ProjectModule],
})
export class ApiModule { }
