import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AsistenciasService {

  constructor(private prisma:PrismaService) {}

  async create(createAsistenciaDto: CreateAsistenciaDto) {

    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    // Verificar si el estudiante existe
    const estudianteExists = await this.prisma.estudiante.findUnique({
      where: { id: createAsistenciaDto.estudiante_id },
    });

    if (!estudianteExists) {
      throw new NotFoundException('El estudiante con el ID proporcionado no existe.');
    }

    // Verificar si el curso existe
    const cursoExists = await this.prisma.curso.findUnique({
      where: { id: createAsistenciaDto.curso_id },
    });

    if (!cursoExists) {
      throw new NotFoundException('El curso con el ID proporcionado no existe.');
    }

    // Verificar si ya existe una asistencia para el mismo estudiante y curso en la misma fecha
    const asisExisting = await this.prisma.asistencia.findFirst({
      where: {
        curso_id: createAsistenciaDto.curso_id,
        estudiante_id: createAsistenciaDto.estudiante_id,
        fecha: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    if (asisExisting) {
      throw new ConflictException('La asistencia ya existe para este estudiante y curso en la fecha actual.');
    }

    return this.prisma.asistencia.create({ data: createAsistenciaDto });
  }

  findAll() {
    return this.prisma.asistencia.findMany();
  }

  findOne(id: number) {
    return this.prisma.asistencia.findUnique({where:{id}});
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.prisma.asistencia.update({
      where:{id},
      data:updateAsistenciaDto
    });
  }

  remove(id: number) {
    return this.prisma.asistencia.delete({where:{id}});
  }
}
