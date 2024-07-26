import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RunCodeService } from './run-code.service';
import { CreateRunCodeDto } from './dto/create-run-code.dto';
import { UpdateRunCodeDto } from './dto/update-run-code.dto';

@Controller('run-code')
export class RunCodeController {
  constructor(private readonly runCodeService: RunCodeService) {}

  @Post()
  create(@Body() createRunCodeDto: CreateRunCodeDto) {
    return this.runCodeService.create(createRunCodeDto);
  }

  @Get()
  findAll() {
    return this.runCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunCodeDto: UpdateRunCodeDto) {
    return this.runCodeService.update(+id, updateRunCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runCodeService.remove(+id);
  }

  @Post('analizar')
  analizar(
    @Body('codigo') codigo: string,
    @Body('idUsuario') idUsuario: string,
    @Body('idProblema') idProblema: string,
  ) {
    return this.runCodeService.analizarCodigo(codigo, idUsuario, idProblema);
  }
}
