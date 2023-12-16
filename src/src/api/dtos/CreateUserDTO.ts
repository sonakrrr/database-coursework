import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserSystemRole } from '@prisma/client';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  login: string;

  @IsNotEmpty()
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

  @IsEnum(UserSystemRole)
  systemRole: UserSystemRole;
}
