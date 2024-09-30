import { Injectable } from '@nestjs/common';
import { CreateGradosacademicoDto } from './dto/create-gradosacademico.dto';
import { UpdateGradosacademicoDto } from './dto/update-gradosacademico.dto';

@Injectable()
export class GradosacademicosService {
  create(createGradosacademicoDto: CreateGradosacademicoDto) {
    return 'This action adds a new gradosacademico';
  }

  findAll() {
    return `This action returns all gradosacademicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gradosacademico`;
  }

  update(id: number, updateGradosacademicoDto: UpdateGradosacademicoDto) {
    return `This action updates a #${id} gradosacademico`;
  }

  remove(id: number) {
    return `This action removes a #${id} gradosacademico`;
  }
}
