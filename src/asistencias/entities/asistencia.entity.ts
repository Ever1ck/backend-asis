import { ApiProperty } from "@nestjs/swagger";
import { Asistencia, EstadoAsis } from "@prisma/client";

export class AsistenciaEntity implements Asistencia {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    fecha: Date;

    @ApiProperty()
    curso_id: number;

    @ApiProperty()
    estudiante_id: number;

    @ApiProperty()
    estadoAsistencia: EstadoAsis;
}
