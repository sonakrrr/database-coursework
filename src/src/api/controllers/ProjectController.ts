import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProjectService } from "../services/ProjectService";
import { CreateProjectDTO } from "../dtos/CreateProjectDTO";
import { ProjectByIdPipe } from "../pipes/ProjectByIdPipe";
import { UpdateProjectDTO } from "../dtos/UpdateProjectDTO";

@Controller('/project')

export class ProjectController {
    constructor(
        private readonly projectService: ProjectService,
    ) { }
    @Post()
    create(
        @Body() body: CreateProjectDTO,
    ) {
        return this.projectService.create(body)
    }
    @Get('/:projectId')
    get(
        @Param('projectId', ProjectByIdPipe) projectId: number,
    ) {
        return this.projectService.get(projectId)
    }
    @Patch('/:projectId')
    update(
        @Param('projectId', ProjectByIdPipe) projectId: number,
        @Body() body: UpdateProjectDTO,
    ) {
        return this.projectService.update(projectId, body)
    }
    @Delete('/:projectId')
    delete(
        @Param('projectId', ProjectByIdPipe) projectId: number,
    ) {
        return this.projectService.deleteProject(projectId)
    }
}