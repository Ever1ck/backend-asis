import { PartialType } from '@nestjs/swagger';
import { CreateJustificacioneDto } from './create-justificacione.dto';

export class UpdateJustificacioneDto extends PartialType(CreateJustificacioneDto) {}
