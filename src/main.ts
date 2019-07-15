import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { connectSwagger } from './configuration/connection.swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Logger.log(process.env.PORT);
  await connectSwagger(app);
  await app.listen(3000);
}
bootstrap();
