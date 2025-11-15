import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function nestjsFun() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log("Server running on http://localhost:3000");
  } catch (error) {
    console.error("Nest failed to start:", error);
  }
}
nestjsFun();
