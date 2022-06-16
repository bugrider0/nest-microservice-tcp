import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
