import { PartialType } from '@nestjs/swagger';
import { CreateNuevomoduloDto } from './create-nuevomodulo.dto';

export class UpdateNuevomoduloDto extends PartialType(CreateNuevomoduloDto) {}
