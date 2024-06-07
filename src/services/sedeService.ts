import { PrismaClient } from "@prisma/client";
import { ISede } from "../models/Sedes";

const prisma = new PrismaClient();

export const insertarSede = async (sede: ISede) => {
    await prisma.sedes.create({
        data:{
            nombre: sede.nombre,
            departamento: sede.departamento,
            provincia: sede.provincia,
            distrito: sede.distrito,
            direccion: sede.direccion
        }
    });
    return {respuesta: 'OK'};
}

export const listarSedes = async () => {
    return await prisma.sedes.findMany();
}

export const obtenerSede = async (idSede: number) => {
    return await prisma.sedes.findUnique({
        where: {
            id_sede: idSede
        }
    });
}

export const modificarSede = async (idSede: number, sede: ISede) => {
    await prisma.sedes.update({
        data: {
            nombre: sede.nombre,
            departamento: sede.departamento,
            provincia: sede.provincia,
            distrito: sede.distrito,
            direccion: sede.direccion
        },
        where: {
            id_sede: idSede
        }
    });
    return {respuesta: 'OK'}
}

export const eliminarSede = async (idSede: number) => {
    await prisma.sedes.delete({
        where: {
            id_sede: idSede
        }
    });
    return {respuesta: 'OK'}
}