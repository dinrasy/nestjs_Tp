// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphqlModule } from './graphql/graphql.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tp02.sqlite',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    ReceiptsModule,
    GraphqlModule, // Ensure this is imported
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // 1. Code-First
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 

      // 2. Schema-First by pointing to your .graphql files
      // typePaths: [join(process.cwd(), 'src/graphql/schema/*.graphql')],

        playground: true,
      }), CategoryModule, ProductModule,
    ],
})
export class AppModule {}