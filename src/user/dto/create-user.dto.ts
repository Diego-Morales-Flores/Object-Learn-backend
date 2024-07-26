import { IsArray, IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';
import { AppRoles } from '../../app.roles';
import { EnumToString } from '../../common/helpers/EnumToString';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password?: string;

  @IsString()
  name: string;

  @IsNumber()
  level?: number;

  @IsArray()
  @IsEnum(AppRoles, {
    each: true,
    message: `must be a valid role value, ${EnumToString(AppRoles)}`,
  })
  roles: string[];
}
