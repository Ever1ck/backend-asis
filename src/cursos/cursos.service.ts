import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosService {
  
  constructor(private prisma:PrismaService) { }

  async create(createCursoDto: CreateCursoDto) {
    const existingCurso = await this.prisma.curso.findFirst({
      where: { area: createCursoDto.area },
    });

    if (existingCurso) {
      throw new ConflictException('El curso ya existe');
    }

    return this.prisma.curso.create({ data: createCursoDto });
  }

  findAll() {
    return this.prisma.curso.findMany();
  }

  findOne(id: number) {
    return this.prisma.curso.findUnique({where:{id}});
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where:{id},
      data:updateCursoDto
    });
  }

  remove(id: number) {
    return this.prisma.curso.delete({where:{id}});
  }
}
