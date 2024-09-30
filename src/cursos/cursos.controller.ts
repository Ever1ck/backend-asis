import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CursoEntity } from './entities/curso.entity';

@ApiTags('cursos')
@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  @ApiCreatedResponse({ type: CursoEntity })
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Get()
  @ApiCreatedResponse({ status:200, description: 'Regresar todas las actas', type: CursoEntity })
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CursoEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const curso = await this.cursosService.findOne(id);
    if (!curso) {
      throw new NotFoundException(`El curso ${id} no existe.`)
    }
    return curso;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CursoEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCursoDto: UpdateCursoDto) {
    try {
      return await this.cursosService.update(id, updateCursoDto);
    } catch (error) {
      throw new NotFoundException(`El curso ${id} no existe.`)
    }

  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CursoEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.cursosService.remove(id);
    } catch (error) {
      throw new NotFoundException(`El curso ${id} no existe.`)
    }
  }
}
