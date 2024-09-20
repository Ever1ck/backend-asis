import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [PersonaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
