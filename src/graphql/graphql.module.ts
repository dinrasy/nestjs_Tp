import { Module } from '@nestjs/common';
import { ReceiptsModule } from '../receipts/receipts.module'; // Import the module
import { ProductResolver } from './resolvers/product.resolver';
import { CategoryCodeFirstResolver } from './resolvers/category.codefirst.resolver';
import { ProductCodeFirstResolver } from './resolvers/product.codefirst.resolver';

@Module({
  imports: [
    ReceiptsModule, // ✅ Add this to provide ReceiptsService to your resolvers
  ],
  providers: [
    ProductResolver,
    CategoryCodeFirstResolver,
    ProductCodeFirstResolver,
  ],
})
export class GraphqlModule {}