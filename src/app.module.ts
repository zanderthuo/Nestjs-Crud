import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot(
      'mongodb+srv://zander:popskull@nestjstut.0lwwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
