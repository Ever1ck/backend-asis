/*
  Warnings:

  - You are about to drop the column `documento_url` on the `Justificacion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[resolucion_id]` on the table `Justificacion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `resolucion_id` to the `Justificacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_justificacion` to the `Justificacion` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoJust" AS ENUM ('JUSTIFICACION', 'ACTIVIDADEXTRACURRICULAR');

-- CreateEnum
CREATE TYPE "EstadoResolucion" AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO');

-- AlterTable
ALTER TABLE "Justificacion" DROP COLUMN "documento_url",
ADD COLUMN     "resolucion_id" INTEGER NOT NULL,
ADD COLUMN     "tipo_justificacion" "TipoJust" NOT NULL;

-- CreateTable
CREATE TABLE "Resolucion" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoResolucion" NOT NULL,
    "documento_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Resolucion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Justificacion_resolucion_id_key" ON "Justificacion"("resolucion_id");

-- AddForeignKey
ALTER TABLE "Justificacion" ADD CONSTRAINT "Justificacion_resolucion_id_fkey" FOREIGN KEY ("resolucion_id") REFERENCES "Resolucion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
