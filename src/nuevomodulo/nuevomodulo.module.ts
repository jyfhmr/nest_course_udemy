import { Module } from '@nestjs/common';
import { NuevomoduloService } from './nuevomodulo.service';
import { NuevomoduloController } from './nuevomodulo.controller';

@Module({
  controllers: [NuevomoduloController],
  providers: [NuevomoduloService],
})
export class NuevomoduloModule {}
