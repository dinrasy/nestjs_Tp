import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReceiptType } from '../types/receipt.type';
import { ReceiptsService } from '../../receipts/receipts.service';

@Resolver(() => ReceiptType)
export class ReceiptCodeFirstResolver {
  constructor(private readonly receiptsService: ReceiptsService) {}

  // FIX: You MUST provide '() => [ReceiptType]' inside the decorator
  @Query(() => [ReceiptType], { name: 'getReceipts' }) 
  async getReceipts() {
    return this.receiptsService.findAll();
  }

  // FIX: Provide '() => ReceiptType' for a single item
  @Query(() => ReceiptType, { name: 'getReceipt', nullable: true })
  async getReceipt(@Args('id') id: string) {
    return this.receiptsService.findOne(id);
  }

  @Mutation(() => ReceiptType)
  async createReceipt(
    @Args('customerName') customerName: string,
    @Args('amount') amount: number,
  ) {
    return this.receiptsService.create({ 
      name: customerName, 
      price: amount,
      issuedAt: new Date().toISOString(),
    });
  }
}