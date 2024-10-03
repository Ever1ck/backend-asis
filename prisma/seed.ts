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
  const persona3 = await prisma.persona.create({
    data: {
      dni: '72496995',
      nombres: 'Brandon Everick',
      apellido_paterno: 'Puma',
      apellido_materno: 'Mestas',
      fecha_nacimiento: new Date('2002-07-04'),
      sexo: 'Masculino',
      telefono: '970697466',
      direccion: 'Av. El Maestro 556',
    },
  });

  const persona4 = await prisma.persona.create({
    data: {
      dni: '72712345',
      nombres: 'Johan',
      apellido_paterno: 'Luque',
      apellido_materno: 'Laura',
      fecha_nacimiento: new Date('2002-05-15'),
      sexo: 'Masculino',
      telefono: '987654123',
      direccion: 'Av. Castillo 123',
    },
  });
  const persona5 = await prisma.persona.create({
    data: {
      dni: '72457896',
      nombres: 'Franco',
      apellido_paterno: 'Lauda',
      apellido_materno: 'Laura',
      fecha_nacimiento: new Date('2002-06-15'),
      sexo: 'Masculino',
      telefono: '987456123',
      direccion: 'Av. El Sol 123',
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

  const usuario3 = await prisma.usuario.create({
    data: {
      email: 'ever1ever14@gmail.com',
      password: '123456',
      role: 'Docente',
      Persona: {
        connect: { id: persona3.id },
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
          piso: 1,
          numeroAula: 101,
        },
      },
    },
  });
  const grado2 = await prisma.gradoAcademico.create({
    data: {
      grado: 'Primero',
      seccion: 'B',
      turno: 'Dia',
      tutor: {
        connect: { id: usuario3.id }, // Asignar a Juan como tutor
      },
      aula: {
        create: {
          edificio: 1,
          piso: 1,
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
        connect: { id: persona4.id },
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
        connect: { id: persona5.id },
      },
      GradoAcademico: {
        connect: { id: grado1.id },
      },
    },
  });

  // Crear Cursos
  const curso1 = await prisma.curso.create({
    data: {
      area: 'Matemática',
    },
  });

  const curso2 = await prisma.curso.create({
    data: {
      area: 'Comunicación',
    },
  });

  const curso3 = await prisma.curso.create({
    data: {
      area: 'Educación Física',
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
