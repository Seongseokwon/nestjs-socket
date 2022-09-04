import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<string>('server.port');
  app.enableCors({
    origin: ['http://localhost:3000'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(port);

  console.log(`Application listening on port ${port}`);
}

bootstrap();
