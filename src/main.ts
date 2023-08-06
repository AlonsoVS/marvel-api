import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    allowedHeaders:
      'Content-Type,Accept,Authorization,Access-Control-Allow-Origin',
    methods: ['POST', 'GET'],
  });
  await app.listen(8080);
}
bootstrap();
