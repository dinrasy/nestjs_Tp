// src/graphql/graphql.module.ts
import { Module } from '@nestjs/common';
import { ReceiptsModule } from '../receipts/receipts.module';
import { ReceiptCodeFirstResolver } from './resolvers/receipt.codefirst.resolver';
// import { ReceiptResolver } from './resolvers/receipt.resolver'; // Comment this out!

@Module({
  imports: [ReceiptsModule],
  providers: [
    // ReceiptResolver, // Comment this out!
    ReceiptCodeFirstResolver,
  ],
})
export class GraphqlModule {}