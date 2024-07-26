import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export interface UserFindByEmail {
  id?: number;
  email?: string;
}

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userExist = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (userExist)
      throw new BadRequestException(['this email is already registered']);
    const newUser = this.userRepository.create(createUserDto);
    const user = this.userRepository.save(newUser);
    delete (await user).password;
    return user;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({
      idUser: id,
    });
    if (!user) throw new NotFoundException(['user does not exist']);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const updateUser = Object.assign(user, updateUserDto);
    return await this.userRepository.save(updateUser);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }

  async findByEmail(data: UserFindByEmail) {
    return await this.userRepository.findOne({
      where: { email: data.email },
    });
  }

  async syncGoogleUser(createUserDto: CreateUserDto) {
    const user = await this.findByEmail({ email: createUserDto.email });
    if (user) {
      return { message: 'User already exists' };
    } else {
      createUserDto.level = 0;
      const newUser = await this.create(createUserDto);
      return { message: 'New user created successfully', user: newUser };
    }
  }

  async updateUserLevel(email: string): Promise<User> {
    const user = await this.findByEmail({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.level = (user.level || 0) + 1;
    return await this.userRepository.save(user);
  }
}
