import {IsArray, IsEmail, IsEnum, IsString} from 'class-validator';
import {AppRoles} from "../../app.roles";
import {EnumToString} from "../../common/helpers/EnumToString";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsArray()
  @IsEnum(AppRoles, {
    each: true,
    message: `must be a valid role value, ${EnumToString(AppRoles)}`,
  })
  roles: string[];
}
