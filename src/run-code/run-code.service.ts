import { Injectable } from '@nestjs/common';
import { CreateRunCodeDto } from './dto/create-run-code.dto';
import { UpdateRunCodeDto } from './dto/update-run-code.dto';
import { promises as fs } from 'fs';
import { PythonShell } from 'python-shell';
import * as path from 'path';

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

  async analizarCodigo(
    codigo: string,
    idUsuario: string,
    idProblema: string,
  ): Promise<string[]> {
    try {
      const dirPath = path.join('src', 'python', idUsuario);
      const filePath = path.join(dirPath, 'problema.py');

      await fs.mkdir(dirPath, { recursive: true });

      await fs.writeFile(filePath, codigo);

      const pyshell = new PythonShell(filePath);
      let testResultMessage = '';

      return await new Promise((resolve, reject) => {
        const messages: string[] = [];

        pyshell.on('message', (message) => {
          messages.push(message);
        });

        pyshell.end(async (err, code, signal) => {
          if (err) {
            return reject(err);
          }
          console.log('The exit code was: ' + code);
          console.log('The exit signal was: ' + signal);
          console.log('finished');

          const testResult = await this.runTest(idProblema, dirPath);

          if (testResult) {
            testResultMessage = 'All tests passed successfully.';
          } else {
            testResultMessage = 'Some tests failed.';
          }

          resolve([testResultMessage, ...messages]);
        });
      });
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Error running Python script');
    }
  }

  async runTest(idProblema: string, dirPath: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const content = await fs.readFile(
        `src/python/tests/test${idProblema}.py`,
      );
      const filePath = path.join(dirPath, 'test.py');
      await fs.writeFile(filePath, content);
      const pyshell = new PythonShell(filePath);

      pyshell.on('message', (message: string) => {
        console.log(message);
      });

      pyshell.end((err: any) => {
        if (err) {
          console.error('Error:', err);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
