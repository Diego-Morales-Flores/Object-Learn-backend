import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SmartphoneService } from './smartphone.service';
import { CreateSmartphoneDto } from './dto/create-smartphone.dto';
import { UpdateSmartphoneDto } from './dto/update-smartphone.dto';
import {Auth} from "../common/decorators";
import {AppResources} from "../app.roles";

@Controller('smartphone')
export class SmartphoneController {
  constructor(private readonly smartphoneService: SmartphoneService) {}

  @Auth({
    possession: 'any',
    action: 'create',
    resource: AppResources.SMARTPHONE,
  })
  @Post()
  create(@Body() createSmartphoneDto: CreateSmartphoneDto) {
    return this.smartphoneService.create(createSmartphoneDto);
  }

  @Auth({
    possession: 'any',
    action: 'read',
    resource: AppResources.SMARTPHONE,
  })
  @Get()
  findAll() {
    return this.smartphoneService.findAll();
  }

  @Auth({
    possession: 'any',
    action: 'read',
    resource: AppResources.SMARTPHONE,
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.smartphoneService.findOne(id);
  }

  @Auth({
    possession: 'any',
    action: 'update',
    resource: AppResources.SMARTPHONE,
  })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSmartphoneDto: UpdateSmartphoneDto,
  ) {
    return this.smartphoneService.update(id, updateSmartphoneDto);
  }

  @Auth({
    possession: 'any',
    action: 'delete',
    resource: AppResources.SMARTPHONE,
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.smartphoneService.remove(id);
  }
}
