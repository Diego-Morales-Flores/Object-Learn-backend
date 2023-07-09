import { Module } from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';
import { SmartphoneController } from './smartphone.controller';
import { DatabaseModule } from '../database/database.module';
import { smartphoneProviders } from './smartphone.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SmartphoneController],
  providers: [...smartphoneProviders, SmartphoneService],
})
export class SmartphoneModule {}
