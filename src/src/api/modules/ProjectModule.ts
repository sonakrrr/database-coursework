import { Module } from "@nestjs/common";
import { ProjectService } from "../services/ProjectService";
import { ProjectController } from "../controllers/ProjectController";
import { ProjectByIdPipe } from "../pipes/ProjectByIdPipe";

@Module({
    controllers: [ProjectController],
    providers: [ProjectService, ProjectByIdPipe],
    exports: [ProjectService, ProjectByIdPipe]
})

export class ProjectModule { }