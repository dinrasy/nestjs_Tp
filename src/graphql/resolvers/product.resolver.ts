import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReceiptsService } from '../../receipts/receipts.service';

@Resolver('Product') 
export class ProductResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  
  @ResolveField('category')
  async category(@Parent() product: any) {
    
    return { 
      id: product.categoryId || '1', 
      name: 'Electronics' 
    };
  }
}