import { BadRequestException, Injectable } from "@nestjs/common";
import { ProjectRepository } from "src/database/repositories/ProjectRepository";
import { CreateProjectDTO } from "../dtos/CreateProjectDTO";
import { UpdateProjectDTO } from "../dtos/UpdateProjectDTO";

@Injectable()

export class ProjectService {
    constructor(
        private readonly projectRepository: ProjectRepository,
    ) { }
    async create(body: CreateProjectDTO) {
        await this.checkTitle(body.title)
        if (body.end_date && new Date(body.end_date) < new Date(body.start_date)) throw new BadRequestException("start date bigger than end date")
        return this.projectRepository.projectCreate(body)
    }
    get(projectId: number) {
        return this.projectRepository.find({
            id: projectId
        })
    }
    async update(projectId: number, body: UpdateProjectDTO) {
        const project = await this.projectRepository.find({
            id: projectId,
        })
        const { title, start_date = project.start_date, end_date = project.end_date } = body
        if (title && title !== project.title) {
            await this.checkTitle(title)
        }
        if (end_date) {
            if (end_date && new Date(end_date) < new Date(start_date)) throw new BadRequestException("start date bigger than end date")
        }
        return this.projectRepository.updateById(projectId, body)
    }
    private async checkTitle(title: string) {
        const project = await this.projectRepository.find({
            title,
        })
        if (project) throw new BadRequestException("project with this title already exist")
    }
    deleteProject(projectId: number) {
        return this.projectRepository.deleteById(projectId)
    }
}