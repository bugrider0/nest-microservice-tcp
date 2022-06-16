// import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  id: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
