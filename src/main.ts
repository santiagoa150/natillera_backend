import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger: Logger = new Logger('Server');

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(process.env.APP_GLOBAL_PREFIX);

  const config = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE)
    .setDescription(process.env.SWAGGER_DESCRIPTION)
    .setVersion(process.env.APP_VERSION)
    .setContact(
      process.env.CONTACT_NAME,
      process.env.CONTACT_URL,
      process.env.CONTACT_EMAIL,
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.SWAGGER_PATH, app, document);

  await app.listen(process.env.APP_PORT || 3000);
  logger.log(`Server listen on: ${process.env.APP_PORT}`);
}

bootstrap();
