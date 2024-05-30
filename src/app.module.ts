import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { VideosModule } from './videos/videos.module';
import { AuthModule } from './auth/auth.module';
import { AwardsModule } from './awards/awards.module';
import { NuevomoduloModule } from './nuevomodulo/nuevomodulo.module';

@Module({
  imports: [CoursesModule, VideosModule, AuthModule, AwardsModule, NuevomoduloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
