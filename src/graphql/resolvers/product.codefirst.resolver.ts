import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ProductType } from '../types/product.type';
import { CategoryType } from '../types/category.type';

@Resolver(() => ProductType)
export class ProductCodeFirstResolver {
  
  // ✅ ADD THIS: Resolves the category relation for ProductType
  @ResolveField(() => CategoryType, { nullable: true })
  async category(@Parent() product: ProductType) {
    // This connects the Product to its Category using the categoryId
    return { 
      id: product.categoryId, 
      name: 'Software Tools' 
    };
  }
}