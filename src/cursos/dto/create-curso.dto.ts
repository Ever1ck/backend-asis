import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCursoDto {

    @ApiProperty()
    @IsString()
    area: string;
}
