import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonasService {

  constructor(private prisma:PrismaService) {}

  async create(createPersonaDto: CreatePersonaDto) {

    const personaexist = await this.prisma.persona.findFirst( {
      where: {
        dni: createPersonaDto.dni
      }
    } );

    if (personaexist) {
      throw new ConflictException('La persona ya a sido registrada');
    }
    return this.prisma.persona.create( { data: createPersonaDto } );
  }

  findAll() {
    return this.prisma.persona.findMany();
  }

  findOne(id: number) {
    return this.prisma.persona.findUnique( { where: { id } } );
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return this.prisma.persona.update( { 
      where: { id }, 
      data: updatePersonaDto 
    } );
  }

  remove(id: number) {
    return this.prisma.persona.delete( { where: { id } } );
  }
}
