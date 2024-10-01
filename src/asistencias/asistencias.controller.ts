import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AsistenciaEntity } from './entities/asistencia.entity';

@ApiTags('asistencias')
@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Post()
  @ApiCreatedResponse({ type: AsistenciaEntity })
  create(@Body() createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciasService.create(createAsistenciaDto);
    
  }

  @Get()
  @ApiCreatedResponse({ status:200, description: 'Regresar todas las asistencias', type: AsistenciaEntity })
  findAll() {
    return this.asistenciasService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: AsistenciaEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.asistenciasService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: AsistenciaEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.asistenciasService.update(id, updateAsistenciaDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: AsistenciaEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.asistenciasService.remove(id);
  }
}
