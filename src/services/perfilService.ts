import { PrismaClient } from "@prisma/client";
import { IPerfil } from "../models/Perfil";

const prisma = new PrismaClient();

export const insertarPerfil = async (perfil: IPerfil) => {
    await prisma.perfil.create({
        data: {
            descripcion: perfil.descripcion
        }
    });
    return {respuesta: 'OK'};
}

export const listarPerfil = async () => {
    return await prisma.perfil.findMany();
}

export const obtenerPerfil = async (idPerfil: number) => {
    return await prisma.perfil.findUnique({
        where: {
            id_perfil: idPerfil
        }
    });
}

export const modificarPerfil = async (idPerfil: number, perfil: IPerfil) => {
    await prisma.perfil.update({
        data: {
            descripcion: perfil.descripcion
        },
        where: {
            id_perfil: idPerfil
        }
    });
    return {respuesta: 'OK'};
}

export const eliminarPerfil = async (idPerfil: number) => {
    await prisma.perfil.delete({
        where: {
            id_perfil: idPerfil
        }
    });
    return {respuesta: 'OK'};
}