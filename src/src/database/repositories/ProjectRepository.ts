import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";
import { Prisma } from "@prisma/client";

@Injectable()

export class ProjectRepository {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }
    projectCreate(data: Prisma.projectsUncheckedCreateInput) {
        return this.prismaService.projects.create({ data })
    }
    find(where: Prisma.projectsWhereInput) {
        return this.prismaService.projects.findFirst({ where })
    }
    updateById(id: number, data: Prisma.projectsUncheckedUpdateInput) {
        return this.prismaService.projects.update({
            where: { id },
            data,
        })
    }
    deleteById(id: number) {
        return this.prismaService.projects.delete({
            where: { id },
        })
    }
}