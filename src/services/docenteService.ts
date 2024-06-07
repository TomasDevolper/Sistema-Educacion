import { PrismaClient } from "@prisma/client";
import { IDocentes } from "../models/Docentes";

const prisma = new PrismaClient();

export const insertarDocente = async (docente: IDocentes) => {
    await prisma.docentes.create({
        data:{
            codigo: docente.codigo,
            documento_identidad: docente.documentoIdentidad,
            nombres: docente.nombres,
            apellido_paterno: docente.apellidoPaterno,
            apellido_materno: docente.apellidoMaterno,
            correo_institucional: docente.correoInstitucional,
            fecha_nacimiento: docente.fechaNacimiento,
            sexo: docente.sexo,
            direccion: docente.direccion,
            especialidad: docente.especialidad
        }
    });
    return {respuesta:'Docente insertado'};
}

export const listarDocente = async () => {
    return await prisma.docentes.findMany();
}

export const obtenerDocente = async (idDocente: number) => {
    console.log('DocenteService::obtenerDocente',idDocente);
    return await prisma.docentes.findUnique({
        where: {
            id_docente: idDocente
        }
    });
}

export const modificarDocente = async (idDocente: number, docente:IDocentes) => {
    console.log('DocenteService::modificarDocente',idDocente,docente);

    await prisma.docentes.update({
        data: {
            codigo: docente.codigo,
            documento_identidad: docente.documentoIdentidad,
            nombres: docente.nombres,
            apellido_paterno: docente.apellidoPaterno,
            apellido_materno: docente.apellidoMaterno,
            correo_institucional: docente.correoInstitucional,
            fecha_nacimiento: docente.fechaNacimiento,
            sexo: docente.sexo,
            direccion: docente.direccion,
            especialidad: docente.especialidad
        },
        where:{
            id_docente: idDocente
        }
    });

    return {respuesta:'Docente modificado'};
}


export const eliminarDocente = async (idDocente: number) => {
    console.log('DocenteService::eliminarDocente',idDocente);
    await prisma.docentes.delete({
        where: {
            id_docente: idDocente
        }
    });
    return {respuesta:'Docente Eliminado'};
}