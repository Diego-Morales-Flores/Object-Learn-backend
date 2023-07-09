import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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
    const userExist = this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (userExist) throw new NotFoundException(['this email is already registered']);
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
    return await this.userRepository
        .createQueryBuilder('user')
        .where(data)
        .addSelect('user.password')
        .getOne();
  }
}
