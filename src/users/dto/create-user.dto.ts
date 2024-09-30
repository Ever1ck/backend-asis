import { Role } from "@prisma/client";

export class CreateUserDto {
    email: string;
    password: string;
    role: Role
    estado: boolean;
    Persona_id: number;
}
