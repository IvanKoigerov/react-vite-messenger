import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 3001;

async function start() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('React Vite Messenger')
    .setDescription('Документация REST API')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api/docs', app, swaggerDocument);

  await app.listen(PORT, () => console.info(`Server started on port ${PORT}`));
}

start().catch((err) => console.info('Server dead', JSON.stringify(err, undefined, 2)));
