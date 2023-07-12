import { User } from 'src/user/entities/user.entity';
import { createConnection } from 'typeorm';

export const connection = createConnection({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
});

export const setDefaultUser = async () => {
  const userRepository = (await connection).getRepository(User);
  const defaultUser = await userRepository
      .createQueryBuilder()
      .where('email = :email', { email: process.env.DEFAULT_USER_EMAIL })
      .getOne();
  if (!defaultUser) {
    const adminUSer = userRepository.create({
      email: process.env.DEFAULT_USER_EMAIL,
      password: process.env.DEFAULT_USER_PASSWORD,
      roles: ['ADMIN'],
    });
    return await userRepository.save(adminUSer);
  }
};
