import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
	
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //habilita los cors
  app.enableCors()

  //minuto 11:46 del video seccion 2 / ENV
  //aumenta el payload permitido
  app.use(json({limit: "60mb"}))

  //versionar el código


  const config = new DocumentBuilder()
  .setTitle("Cats Example")
  .setDescription("the  cats api desc")
  .setVersion("1.0")
  .addTag("cats")
  .addTag("auth")
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup("docs",app,document)

  await app.listen(3000);
}
bootstrap();
