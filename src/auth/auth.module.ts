import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {UserModule} from "../user/user.module";
import {LocalStrategy, JwtStrategy} from "./strategies";
import {UserService} from "../user/user.service";
import {userProviders} from "../user/user.providers";
import {DatabaseModule} from "../database/database.module";

@Module({
    imports: [
        DatabaseModule,
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_TOKEN,
                signOptions: {expiresIn: '30d'},
            }),
        }),
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        UserModule,
    ],
    providers: [UserService, AuthService, LocalStrategy, JwtStrategy,...userProviders],
    controllers: [AuthController],
})
export class AuthModule {
}
