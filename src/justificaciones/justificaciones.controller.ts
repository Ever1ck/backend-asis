import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JustificacionesService } from './justificaciones.service';
import { CreateJustificacioneDto } from './dto/create-justificacione.dto';
import { UpdateJustificacioneDto } from './dto/update-justificacione.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('justificaciones')
@Controller('justificaciones')
export class JustificacionesController {
  constructor(private readonly justificacionesService: JustificacionesService) {}

  @Post()
  create(@Body() createJustificacioneDto: CreateJustificacioneDto) {
    return this.justificacionesService.create(createJustificacioneDto);
  }

  @Get()
  findAll() {
    return this.justificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.justificacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJustificacioneDto: UpdateJustificacioneDto) {
    return this.justificacionesService.update(+id, updateJustificacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.justificacionesService.remove(+id);
  }
}
