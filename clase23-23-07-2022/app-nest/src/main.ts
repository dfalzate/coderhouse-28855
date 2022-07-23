import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats API')
    .setDescription('The cats API')
    .setVersion('v1')
    .addTag('cat')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentacion', app, document);

  await app.listen(3000);
}
bootstrap();
