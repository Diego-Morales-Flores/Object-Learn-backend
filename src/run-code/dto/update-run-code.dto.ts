import { PartialType } from '@nestjs/mapped-types';
import { CreateRunCodeDto } from './create-run-code.dto';

export class UpdateRunCodeDto extends PartialType(CreateRunCodeDto) {}
