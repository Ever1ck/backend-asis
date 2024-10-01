import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { Exclude } from "class-transformer";
import { User } from "src/users/entities/user.entity";

export class DocenteEntity implements User {

    constructor(partial: Partial<DocenteEntity>) {
        Object.assign(this, partial);
      }

    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty({enum: Role})
    role: Role;

    @ApiProperty()
    Persona_id: number;

}
