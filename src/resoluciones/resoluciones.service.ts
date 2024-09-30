import { Injectable } from '@nestjs/common';
import { CreateResolucioneDto } from './dto/create-resolucione.dto';
import { UpdateResolucioneDto } from './dto/update-resolucione.dto';

@Injectable()
export class ResolucionesService {
  create(createResolucioneDto: CreateResolucioneDto) {
    return 'This action adds a new resolucione';
  }

  findAll() {
    return `This action returns all resoluciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resolucione`;
  }

  update(id: number, updateResolucioneDto: UpdateResolucioneDto) {
    return `This action updates a #${id} resolucione`;
  }

  remove(id: number) {
    return `This action removes a #${id} resolucione`;
  }
}
