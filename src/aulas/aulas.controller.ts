import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { CreateAulaDto } from './dto/create-aula.dto';
import { UpdateAulaDto } from './dto/update-aula.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AulaEntity } from './entities/aula.entity';

@Controller('aulas')
@ApiTags('aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) { }

  @Post()
  @ApiCreatedResponse({ type: AulaEntity })
  create(@Body() createAulaDto: CreateAulaDto) {
    return this.aulasService.create(createAulaDto);
  }

  @Get()
  @ApiCreatedResponse({ status:200, description: 'Regresar todas las actas', type: AulaEntity })
  findAll() {
    return this.aulasService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: AulaEntity, isArray: true })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const aulaFound = await this.aulasService.findOne(id);
    if (!aulaFound) {
      throw new NotFoundException(`El aula ${id} no existe.`);
    }
    return aulaFound;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: AulaEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateAulaDto: UpdateAulaDto) {

    try {
      return await this.aulasService.update(id, updateAulaDto);
    }
    catch (error) {
      throw new NotFoundException(`El aula ${id} no existe para actualizar.`);
    }
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: AulaEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.aulasService.remove(id);
    }
    catch (error) {
      throw new NotFoundException(`El aula ${id} no existe para eliminar.`);
    }
  }
}
