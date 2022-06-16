// import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductDto {
  id: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
}
