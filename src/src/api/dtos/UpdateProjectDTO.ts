import { project_status } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, IsUrl, MaxLength, isURL } from "class-validator";

export class UpdateProjectDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsEnum(project_status)
    @IsOptional()
    status?: project_status

    @IsOptional()
    @IsDateString()
    start_date?: string

    @IsOptional()
    @IsDateString()
    end_date?: string

    @IsOptional()
    @IsString()
    @IsUrl()
    @MaxLength(200)
    logo?: string

    @IsOptional()
    @IsString()
    @MaxLength(4000)
    description?: string
}