import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReceiptsService } from '../../receipts/receipts.service';

@Resolver('Product') 
export class ProductResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  // ... existing Query and Mutation logic ...

  // ✅ ADD THIS: Resolves the 'category' field in shop.graphql
  @ResolveField('category')
  async category(@Parent() product: any) {
    // In Practice 4, you use the categoryId from the product to find the category
    // For now, we return a mock object to show the relation works
    return { 
      id: product.categoryId || '1', 
      name: 'Electronics' 
    };
  }
}