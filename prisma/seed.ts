import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear Personas
  const persona1 = await prisma.persona.create({
    data: {
      dni: '12345678',
      nombres: 'Juan',
      apellido_paterno: 'Perez',
      apellido_materno: 'Lopez',
      fecha_nacimiento: new Date('1980-05-15'),
      sexo: 'Masculino',
      telefono: '987654321',
      direccion: 'Av. Siempre Viva 123',
    },
  });

  const persona2 = await prisma.persona.create({
    data: {
      dni: '87654321',
      nombres: 'Maria',
      apellido_paterno: 'Gonzales',
      apellido_materno: 'Torres',
      fecha_nacimiento: new Date('1990-07-25'),
      sexo: 'Femenino',
      telefono: '912345678',
      direccion: 'Calle Falsa 456',
    },
  });

  // Crear Usuarios
  const usuario1 = await prisma.usuario.create({
    data: {
      email: 'juan.perez@example.com',
      password: 'securepassword',
      role: 'Docente',
      Persona: {
        connect: { id: persona1.id },
      },
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      email: 'maria.gonzales@example.com',
      password: 'anotherpassword',
      role: 'Secretaria',
      Persona: {
        connect: { id: persona2.id },
      },
    },
  });

  // Crear Grados Académicos
  const grado1 = await prisma.gradoAcademico.create({
    data: {
      grado: 'Primero',
      seccion: 'A',
      turno: 'Dia',
      tutor: {
        connect: { id: usuario1.id }, // Asignar a Juan como tutor
      },
      aula: {
        create: {
          edificio: 1,
          piso: 2,
          numeroAula: 101,
        },
      },
    },
  });

  // Crear Estudiantes
  const estudiante1 = await prisma.estudiante.create({
    data: {
      codigo_matricula: '2024-0001',
      Persona: {
        connect: { id: persona1.id },
      },
      GradoAcademico: {
        connect: { id: grado1.id },
      },
    },
  });

  const estudiante2 = await prisma.estudiante.create({
    data: {
      codigo_matricula: '2024-0002',
      Persona: {
        connect: { id: persona2.id },
      },
      GradoAcademico: {
        connect: { id: grado1.id },
      },
    },
  });

  // Crear Cursos
  const curso1 = await prisma.curso.create({
    data: {
      area: 'Matemáticas',
    },
  });

  // Crear Horarios para el Curso
  await prisma.horario.create({
    data: {
      gradoAcademico: {
        connect: { id: grado1.id },
      },
      curso: {
        connect: { id: curso1.id },
      },
      dia: 'Lunes',
      horaInicio: '08:00',
      horaFin: '09:30',
    },
  });

  // Crear Asistencia para un Estudiante
  await prisma.asistencia.create({
    data: {
      fecha: new Date(),
      estadoAsistencia: 'Presente',
      curso: {
        connect: { id: curso1.id },
      },
      estudiante: {
        connect: { id: estudiante1.id },
      },
    },
  });

  console.log('Datos iniciales creados.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
