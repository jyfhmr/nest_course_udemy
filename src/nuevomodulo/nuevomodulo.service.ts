import { Injectable } from '@nestjs/common';
import { CreateNuevomoduloDto } from './dto/create-nuevomodulo.dto';
import { UpdateNuevomoduloDto } from './dto/update-nuevomodulo.dto';

@Injectable()
export class NuevomoduloService {
  create(createNuevomoduloDto: CreateNuevomoduloDto) {
    return 'This action adds a new nuevomodulo';
  }

  findAll() {
    return `This action returns all nuevomodulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nuevomodulo`;
  }

  update(id: number, updateNuevomoduloDto: UpdateNuevomoduloDto) {
    return `This action updates a #${id} nuevomodulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} nuevomodulo`;
  }
}
