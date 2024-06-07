import { PrismaClient } from "@prisma/client";
import { ICarrera } from "../models/Carrera";

const prisma = new PrismaClient();

export const insertarCarrera = async (carrera: ICarrera) => {
    await prisma.carrera.create({
        data: {
            nombre: carrera.nombre,
            director_nombre: carrera.directorNombre
        }
    });
    return {respuesta: 'OK'};
}

export const listarCarreras = async () => {
    return await prisma.carrera.findMany();
}

export const obtenerCarrera = async (idCarrera: number) => {
    return await prisma.carrera.findUnique({
        where: {
            id_carrera: idCarrera
        }
    });
}

export const modificarCarrera = async (idCarrera: number, carrera: ICarrera) => {
    await prisma.carrera.update({
        data: {
            nombre: carrera.nombre,
            director_nombre: carrera.directorNombre
        },
        where: {
            id_carrera: idCarrera
        }
    });
    return {respuesta: 'OK'};
}

export const eliminarCarrera = async (idCarrera: number) => {
    await prisma.carrera.delete({
        where: {
            id_carrera: idCarrera
        }
    });
    return {respuesta: 'OK'};
}