import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ProjectRepository } from "src/database/repositories/ProjectRepository";

@Injectable()
export class ProjectByIdPipe implements PipeTransform {
    constructor(
        private readonly projectRepository: ProjectRepository
    ) { }
    async transform(projectId: number) {
        const project = await this.projectRepository.find({
            id: +projectId
        })
        if (!project) throw new BadRequestException("project with such id is not found")
        return +projectId
    }
}