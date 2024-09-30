import { ApiProperty } from "@nestjs/swagger";
import { GradoAc, TurnoAc } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateGradosacademicoDto {
    
    @ApiProperty({ enum: GradoAc })
    @IsEnum(GradoAc)
    grado: GradoAc;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    seccion: string;

    @ApiProperty()
    @IsInt()
    tutor_id: number;

    @ApiProperty()
    @IsInt()
    aula_id: number;

    @ApiProperty({ enum: TurnoAc })
    @IsEnum(TurnoAc)
    turno: TurnoAc;
}
