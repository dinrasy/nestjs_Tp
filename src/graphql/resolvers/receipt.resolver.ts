import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReceiptsService } from '../../receipts/receipts.service';
import { ReceiptType } from '../types/receipt.type';

@Resolver(() => ReceiptType)
export class ReceiptResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Query(() => [ReceiptType], { name: 'receipts' })
  async getReceipts() {
    return this.receiptsService.findAll();
  }

  @Query(() => ReceiptType, { name: 'receipt', nullable: true })
  async getReceipt(@Args('id') id: string) {
    return this.receiptsService.findOne(id);
  }

  @Mutation(() => ReceiptType)
  async createReceipt(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('issuedAt') issuedAt: string,
  ) {
    return this.receiptsService.create({ name, price, issuedAt });
  }
}