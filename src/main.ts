import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; //
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Enable for Challenge 2[cite: 3]
  await app.listen(3000);
}
bootstrap();