import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern('create')
  create(createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @MessagePattern('findAll')
  findAll() {
    return this.productsService.findAll();
  }

  @MessagePattern('findOne')
  findOne(id: string) {
    return this.productsService.findOne(+id);
  }

  @MessagePattern('update')
  update(updateProductDto: UpdateProductDto) {
    return this.productsService.update(+updateProductDto.id, updateProductDto);
  }

  @MessagePattern('remove')
  remove(id: string) {
    return this.productsService.remove(+id);
  }
}
