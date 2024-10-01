import { ApiProperty } from "@nestjs/swagger";
import { EstadoAsis } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateAsistenciaDto {

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    curso_id: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    estudiante_id: number;

    @ApiProperty({ enum: EstadoAsis })
    @IsNotEmpty()
    estadoAsistencia: EstadoAsis;

}
