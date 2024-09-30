import { ApiProperty } from "@nestjs/swagger";
import { GradoAc, GradoAcademico, TurnoAc } from "@prisma/client";

export class GradosacademicoEntity implements GradoAcademico {

    @ApiProperty()
    id: number;

    @ApiProperty()
    grado: GradoAc;

    @ApiProperty()
    seccion: string;

    @ApiProperty()
    tutor_id: number;

    @ApiProperty()
    aula_id: number;

    @ApiProperty()
    turno: TurnoAc;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
