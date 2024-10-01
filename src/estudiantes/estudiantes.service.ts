import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudiantesService {

  constructor(private prisma:PrismaService) {}

  create(createEstudianteDto: CreateEstudianteDto) {
    return 'This action adds a new estudiante';
  }

  findAll() {
    return this.prisma.estudiante.findMany( { include: { Persona:true } } );
  }

  findOne(id: number) {
    return this.prisma.estudiante.findUnique( { 
      where: { id },
      include: { Persona:true } 
    } );
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return this.prisma.estudiante.update( {
      where: { id },
      data: updateEstudianteDto
    });
  }

  remove(id: number) {
    return this.prisma.estudiante.delete( { where: { id } } );
  }
}
