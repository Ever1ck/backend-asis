import { Injectable } from '@nestjs/common';
import { CreateTurnocursoDto } from './dto/create-turnocurso.dto';
import { UpdateTurnocursoDto } from './dto/update-turnocurso.dto';

@Injectable()
export class TurnocursosService {
  create(createTurnocursoDto: CreateTurnocursoDto) {
    return 'This action adds a new turnocurso';
  }

  findAll() {
    return `This action returns all turnocursos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turnocurso`;
  }

  update(id: number, updateTurnocursoDto: UpdateTurnocursoDto) {
    return `This action updates a #${id} turnocurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} turnocurso`;
  }
}
