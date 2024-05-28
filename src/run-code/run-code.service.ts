import { Injectable } from '@nestjs/common';
import { CreateRunCodeDto } from './dto/create-run-code.dto';
import { UpdateRunCodeDto } from './dto/update-run-code.dto';

@Injectable()
export class RunCodeService {
  create(createRunCodeDto: CreateRunCodeDto) {
    return 'This action adds a new runCode';
  }

  findAll() {
    return `This action returns all runCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} runCode`;
  }

  update(id: number, updateRunCodeDto: UpdateRunCodeDto) {
    return `This action updates a #${id} runCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} runCode`;
  }

  analizarCodigo(codigo: string) {
    if(codigo === 'wesser'){
      return `ESTE ES TU CODIGO ${codigo}`;
    } else {
      return 'estas mal 123';
    }
  }
}
