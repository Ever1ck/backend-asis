import { Module } from '@nestjs/common';
import { GradosacademicosService } from './gradosacademicos.service';
import { GradosacademicosController } from './gradosacademicos.controller';

@Module({
  controllers: [GradosacademicosController],
  providers: [GradosacademicosService],
})
export class GradosacademicosModule {}
