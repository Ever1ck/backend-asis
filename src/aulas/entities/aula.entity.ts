import { ApiProperty } from "@nestjs/swagger";
import { Aula } from "@prisma/client";

export class AulaEntity implements Aula {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    edificio: number;

    @ApiProperty()
    piso: number;

    @ApiProperty()
    numeroAula: number;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    updated_at: Date;
}
