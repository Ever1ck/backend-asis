import { ApiProperty } from "@nestjs/swagger";
import { Curso } from "@prisma/client";

export class CursoEntity implements Curso {

    @ApiProperty()
    id: number;

    @ApiProperty()
    area: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
