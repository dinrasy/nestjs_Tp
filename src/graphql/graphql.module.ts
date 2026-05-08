import { Module } from '@nestjs/common';
import { ReceiptsModule } from '../receipts/receipts.module'; 
import { CategoryModule } from '../category/category.module'; 
import { ProductModule } from '../product/product.module'; 

import { ProductResolver } from './resolvers/product.resolver';
import { CategoryResolver } from './resolvers/category.resolver'; 
import { CategoryCodeFirstResolver } from './resolvers/category.codefirst.resolver';
import { ProductCodeFirstResolver } from './resolvers/product.codefirst.resolver';

@Module({
  imports: [
    ReceiptsModule, 
    CategoryModule, 
    ProductModule   
  ],
  providers: [
    //ProductResolver,
    //CategoryResolver, 
    CategoryCodeFirstResolver, 
    ProductCodeFirstResolver,
  ],
})
export class GraphqlModule {}