import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const PORT = process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb' }));
  await app.listen(PORT, () => {
    console.log(PORT);
  });
}
bootstrap();
