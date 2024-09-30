import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    dni : string;

    nombres : string;

    apellido_paterno : string;

    apellido_materno : string;

    telefono : string;

    direccion : string;

    fecha_nacimiento : Date;

    sexo : string;

}
