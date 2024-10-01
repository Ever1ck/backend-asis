import { ConflictException, Injectable } from '@nestjs/common';
import { CreateGradosacademicoDto } from './dto/create-gradosacademico.dto';
import { UpdateGradosacademicoDto } from './dto/update-gradosacademico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GradosacademicosService {

  constructor(private prisma:PrismaService) { }

  async create(createGradosacademicoDto: CreateGradosacademicoDto) {

    const gradoacademicoexistente = await this.prisma.gradoAcademico.findFirst({
      where: { 
        grado: createGradosacademicoDto.grado, 
        seccion: createGradosacademicoDto.seccion,
        tutor_id: createGradosacademicoDto.tutor_id,
        aula_id: createGradosacademicoDto.aula_id,
        turno: createGradosacademicoDto.turno},
    });
    if (gradoacademicoexistente) {
      throw new ConflictException('El grado academico ya existe');
    }
    return this.prisma.gradoAcademico.create({ data: createGradosacademicoDto });
  }

  findAll() {
    return this.prisma.gradoAcademico.findMany({
      include: {
        tutor: {
          select: {
            Persona: {
              select: {
                nombres: true,
                apellido_paterno: true,
                apellido_materno: true,
              },
            },
          },
        },
        aula: {
          select: {
            edificio: true,
            piso: true,
            numeroAula: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.gradoAcademico.findUnique({ where: { id: id } });
  }

  update(id: number, updateGradosacademicoDto: UpdateGradosacademicoDto) {
    return this.prisma.gradoAcademico.update({ where: { id: id }, data: updateGradosacademicoDto });
  }

  remove(id: number) {
    return this.prisma.gradoAcademico.delete({ where: { id: id } });
  }
}
