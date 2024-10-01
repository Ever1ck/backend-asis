import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PersonasModule } from './personas/personas.module';
import { UsersModule } from './users/users.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { AulasModule } from './aulas/aulas.module';
import { GradosacademicosModule } from './gradosacademicos/gradosacademicos.module';
import { CursosModule } from './cursos/cursos.module';
import { TurnocursosModule } from './turnocursos/turnocursos.module';
import { DocentesModule } from './docentes/docentes.module';
import { DocentescursosModule } from './docentescursos/docentescursos.module';
import { HorariosModule } from './horarios/horarios.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { JustificacionesModule } from './justificaciones/justificaciones.module';
import { ResolucionesModule } from './resoluciones/resoluciones.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PersonasModule, UsersModule, EstudiantesModule, AulasModule, GradosacademicosModule, CursosModule, TurnocursosModule, DocentesModule, DocentescursosModule, HorariosModule, AsistenciasModule, JustificacionesModule, ResolucionesModule, NotificacionesModule, AuthModule],
  controllers: [],
})
export class AppModule {}
