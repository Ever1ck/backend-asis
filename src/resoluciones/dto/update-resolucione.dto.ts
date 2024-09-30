import { PartialType } from '@nestjs/swagger';
import { CreateResolucioneDto } from './create-resolucione.dto';

export class UpdateResolucioneDto extends PartialType(CreateResolucioneDto) {}
