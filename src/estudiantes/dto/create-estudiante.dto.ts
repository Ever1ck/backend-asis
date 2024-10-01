import { ApiProperty } from "@nestjs/swagger";

export class CreateEstudianteDto {

    @ApiProperty()
    codigo_matricula: string;

    @ApiProperty()
    persona_id: number;

    @ApiProperty()
    gradoAcademico_id: number;
}
