import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl, Length } from "class-validator";

export class CreateVideoDto {


    @ApiProperty()
    @IsNotEmpty()
    @Length(1,15)
    title: string;

    description: string;

    @IsUrl()
    src: string

    asd: string


}
