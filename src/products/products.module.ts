import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductsControler } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
    controllers: [ProductsControler],
    providers: [ProductService],
})
export class ProductModule {}