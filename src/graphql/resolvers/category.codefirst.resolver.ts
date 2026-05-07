import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryType } from '../types/category.type';

@Resolver(() => CategoryType)
export class CategoryCodeFirstResolver {
  
  @Query(() => [CategoryType], { name: 'categories' })
  async getCategories() {
    return [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Accessories' }
    ];
  }

  @Mutation(() => CategoryType)
  async createCategory(@Args('name') name: string) {
    return { id: Date.now(), name };
  }
}