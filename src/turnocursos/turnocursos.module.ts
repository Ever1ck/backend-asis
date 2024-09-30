import { Module } from '@nestjs/common';
import { TurnocursosService } from './turnocursos.service';
import { TurnocursosController } from './turnocursos.controller';

@Module({
  controllers: [TurnocursosController],
  providers: [TurnocursosService],
})
export class TurnocursosModule {}
