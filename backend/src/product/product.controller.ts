import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.shema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    async getAllProducts(): Promise<Product[]>{
        return this.productService.findAll();
    }

    @Post()
    async createProduct(
        @Body()
        product: CreateProductDto,
    ): Promise<Product> {
        return this.productService.create(product);
    }

    @Get()
    async getProduct(
        @Param('id')
        id: string
    ): Promise<Product> {
        return this.productService.findById(id);
    }

    @Put()
    async updateProduct(
        @Param('id')
        id: string,
        @Body()
        product: UpdateProductDto,
    ): Promise<Product> {
        return this.productService.updateById(id, product);
    }

    @Delete(':id')
    async deleteProduct(
        @Param('id')
        id: string,
    ): Promise<Product> {
        return this.productService.deteleById(id);
    }

}

