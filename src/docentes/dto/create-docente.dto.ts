import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail } from "class-validator";

export class CreateDocenteDto {

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty({enum: Role})
    role: Role;

    @ApiProperty()
    Persona_id: number;

}
