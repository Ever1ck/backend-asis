import { ApiProperty } from "@nestjs/swagger";
import { SexoPersona } from "@prisma/client";
import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreatePersonaDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    dni : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    nombres : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    apellido_paterno : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    apellido_materno : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    telefono : string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    direccion : string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    fecha_nacimiento : Date;

    @ApiProperty( {enum: SexoPersona} )
    @IsEnum( SexoPersona )
    sexo : SexoPersona;

}
