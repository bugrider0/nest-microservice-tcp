import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        name: createProductDto.name,
      },
    });
    if (product) throw new ConflictException('This product is already Exists');

    return await this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new NotFoundException('This product is not found');

    return await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        name: updateProductDto.name,
      },
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new NotFoundException('This product is not found');

    return await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
