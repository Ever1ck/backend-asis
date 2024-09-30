import { Module } from '@nestjs/common';
import { JustificacionesService } from './justificaciones.service';
import { JustificacionesController } from './justificaciones.controller';

@Module({
  controllers: [JustificacionesController],
  providers: [JustificacionesService],
})
export class JustificacionesModule {}
