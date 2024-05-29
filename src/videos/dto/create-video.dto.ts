import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUrl, Length, Max } from "class-validator";

export class CreateVideoDto {


    @ApiProperty()
    @IsNotEmpty()
    @Length(1,15)
    title: string;

    description: string;

    @IsUrl()
    src: string

    asd: string


    @IsNumber()
    @Max(500)
    number: number 

}
