import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TurnocursosService } from './turnocursos.service';
import { CreateTurnocursoDto } from './dto/create-turnocurso.dto';
import { UpdateTurnocursoDto } from './dto/update-turnocurso.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('turnocursos')
@Controller('turnocursos')
export class TurnocursosController {
  constructor(private readonly turnocursosService: TurnocursosService) {}

  @Post()
  create(@Body() createTurnocursoDto: CreateTurnocursoDto) {
    return this.turnocursosService.create(createTurnocursoDto);
  }

  @Get()
  findAll() {
    return this.turnocursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnocursosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurnocursoDto: UpdateTurnocursoDto) {
    return this.turnocursosService.update(+id, updateTurnocursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turnocursosService.remove(+id);
  }
}
