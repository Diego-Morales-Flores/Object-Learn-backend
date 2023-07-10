import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { SmartphoneModule } from './smartphone/smartphone.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from "@nestjs/config";
import {AccessControlModule} from "nest-access-control";
import {roles} from "./app.roles";

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      AccessControlModule.forRoles(roles),
      DatabaseModule,
      UserModule,
      SmartphoneModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
