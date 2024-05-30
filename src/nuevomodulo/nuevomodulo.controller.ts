import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NuevomoduloService } from './nuevomodulo.service';
import { CreateNuevomoduloDto } from './dto/create-nuevomodulo.dto';
import { UpdateNuevomoduloDto } from './dto/update-nuevomodulo.dto';

@Controller('nuevomodulo')
export class NuevomoduloController {
  constructor(private readonly nuevomoduloService: NuevomoduloService) {}

  @Post()
  create(@Body() createNuevomoduloDto: CreateNuevomoduloDto) {
    return this.nuevomoduloService.create(createNuevomoduloDto);
  }

  @Get()
  findAll() {
    return this.nuevomoduloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nuevomoduloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNuevomoduloDto: UpdateNuevomoduloDto) {
    return this.nuevomoduloService.update(+id, updateNuevomoduloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nuevomoduloService.remove(+id);
  }
}
