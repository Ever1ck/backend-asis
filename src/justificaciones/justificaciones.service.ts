import { Injectable } from '@nestjs/common';
import { CreateJustificacioneDto } from './dto/create-justificacione.dto';
import { UpdateJustificacioneDto } from './dto/update-justificacione.dto';

@Injectable()
export class JustificacionesService {
  create(createJustificacioneDto: CreateJustificacioneDto) {
    return 'This action adds a new justificacione';
  }

  findAll() {
    return `This action returns all justificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} justificacione`;
  }

  update(id: number, updateJustificacioneDto: UpdateJustificacioneDto) {
    return `This action updates a #${id} justificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} justificacione`;
  }
}
