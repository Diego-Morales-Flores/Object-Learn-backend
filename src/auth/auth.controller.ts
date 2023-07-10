import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from "./guard";
import {LoginDto} from "./dto/login.dto";
import {User as UserEntity} from 'src/user/entities/user.entity';
import {Auth, User} from "../common/decorators";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() loginDto: LoginDto, @User() user: UserEntity) {
        const data = await this.authService.login(user);
        return {
            message: 'Login successful',
            data,
        };
    }

    @Auth()
    @Get('profile')
    profile(@User() user: UserEntity) {
        return {
            message: 'Correct request',
            user,
        };
    }

    @Auth()
    @Get('refresh')
    async refreshToken(@User() user: UserEntity) {
        const data = await this.authService.login(user);
        return {
            message: 'Refresh Token successful',
            data,
        };
    }
}
