import { Module, Global } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { ProjectRepository } from 'src/database/repositories/ProjectRepository';

@Global()
@Module({
  providers: [PrismaService, ProjectRepository],
  exports: [PrismaService, ProjectRepository],
})
export class PrismaModule { }
