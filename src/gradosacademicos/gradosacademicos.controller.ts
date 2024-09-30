import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GradosacademicosService } from './gradosacademicos.service';
import { CreateGradosacademicoDto } from './dto/create-gradosacademico.dto';
import { UpdateGradosacademicoDto } from './dto/update-gradosacademico.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { GradosacademicoEntity } from './entities/gradosacademico.entity';

@ApiTags('graduadosacademicos')
@Controller('gradosacademicos')
export class GradosacademicosController {
  constructor(private readonly gradosacademicosService: GradosacademicosService) {}

  @Post()
  @ApiCreatedResponse({ type: GradosacademicoEntity })
  create(@Body() createGradosacademicoDto: CreateGradosacademicoDto) {
    return this.gradosacademicosService.create(createGradosacademicoDto);
  }

  @Get()
  @ApiCreatedResponse({ status:200, description: 'Regresar todas las actas', type: GradosacademicoEntity })
  findAll() {
    return this.gradosacademicosService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: GradosacademicoEntity, isArray: true })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.gradosacademicosService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: GradosacademicoEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGradosacademicoDto: UpdateGradosacademicoDto) {
    return this.gradosacademicosService.update(id, updateGradosacademicoDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: GradosacademicoEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.gradosacademicosService.remove(id);
  }
}
