import { ArgumentMetadata, HttpException, Injectable, ParseIntPipe, PipeTransform } from '@nestjs/common';

@Injectable()
export class PipesPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {


    value = parseInt(value)

    if(isNaN(value)){
      throw new HttpException("Pasaste un valor que es un string y no un número",401)
    }

    console.log("pasando por el pipe, convirtiendo a número y sumando 1")

    return value+1;
  }
}
