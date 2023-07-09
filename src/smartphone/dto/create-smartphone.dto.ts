import { IsNumber, IsString } from 'class-validator';

export class CreateSmartphoneDto {
  @IsString()
  name: string;

  @IsString()
  model: string;

  @IsNumber()
  priceReferential: number;

  @IsNumber()
  salePrice: number;

  @IsNumber()
  modelYear: number;

  @IsString()
  auditData: string;
}
