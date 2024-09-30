import { PartialType } from '@nestjs/swagger';
import { CreateTurnocursoDto } from './create-turnocurso.dto';

export class UpdateTurnocursoDto extends PartialType(CreateTurnocursoDto) {}
