import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {setDefaultUser} from "./config/default-user";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await setDefaultUser();

  await app.listen(5000);
}
bootstrap();
