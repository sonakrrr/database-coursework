import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserSystemRole } from '@prisma/client';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @MaxLength(30)
  login: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  password: string;

  @IsEmail()
  @IsOptional()
  @IsString()
  @MaxLength(40)
  email?: string;

  @IsPhoneNumber()
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  avatar?: string;

  @IsOptional()
  @IsEnum(UserSystemRole)
  systemRole: UserSystemRole;
}
