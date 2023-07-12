import {Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {User} from "../user/entities/user.entity";
import {JwtService} from "@nestjs/jwt";
import {compare} from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail({ email });
        if (user && (await compare(password, user.password))) {
            delete user.password;
            return user;
        }
        return null;
    }

    async login(user: User) {
        const { idUser } = user;
        const payload = { sub: idUser };
        const data = {
            user,
            accessToken: this.jwtService.sign(payload),
        }
        return data;
    }
}
