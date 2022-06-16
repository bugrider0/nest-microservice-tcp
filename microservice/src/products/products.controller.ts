import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';
// import { ApiTags } from '@nestjs/swagger';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @ApiTags('Products')
  @MessagePattern('create')
  create(createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // @ApiTags('Products')
  @MessagePattern('findAll')
  findAll() {
    return this.productsService.findAll();
  }

  // @ApiTags('Products')
  @MessagePattern('findOne')
  findOne(id: string) {
    return this.productsService.findOne(+id);
  }

  // @ApiTags('Products')
  @MessagePattern('update')
  update(updateProductDto: UpdateProductDto) {
    return this.productsService.update(+updateProductDto.id, updateProductDto);
  }

  // @ApiTags('Products')
  @MessagePattern('remove')
  remove(id: string) {
    return this.productsService.remove(+id);
  }
}
