import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiptsModule } from './receipts/receipts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Receipt } from './database/entities/receipts.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Support running from tp02/ while keeping .env one level above.
      envFilePath: ['.env', '../.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'tp02',
      entities: [Receipt],
      synchronize: true,
    }),
    ReceiptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}