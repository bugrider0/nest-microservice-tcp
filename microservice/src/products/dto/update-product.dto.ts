import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
