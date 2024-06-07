import { PrismaClient } from "@prisma/client";
import { IAlumno } from "../models/Alumno";

const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno) => {
    await prisma.alumnos.create({
        data:{
            codigo: alumno.codigo,
            documento_Identidad: alumno.documentoIdentidad,
            nombres: alumno.nombres,
            apellido_paterno: alumno.apellidoPaterno,
            apellido_materno: alumno.apellidoMaterno,
            correo_institucional: alumno.correoInstitucional,
            fecha_nacimiento: alumno.fechaNacimiento,
            sexo: alumno.sexo,
            direccion: alumno.direccion
        }
    });
    return {respuesta:'OK'};
}

export const listarAlumnos = async () => {
    return await prisma.alumnos.findMany();
}

export const obtenerAlumno = async (idAlumno: number) => {
    console.log('alumnoService::obtenerAlumno',idAlumno);
    return await prisma.alumnos.findUnique({
        where: {
            Id_alumno: idAlumno
        }
    });
}

export const modificarAlumno = async (idAlumno: number, alumno:IAlumno) => {
    console.log('alumnoService::modificarAlumno',idAlumno,alumno);

    await prisma.alumnos.update({
        data: {
            codigo: alumno.codigo,
            documento_Identidad: alumno.documentoIdentidad,
            nombres: alumno.nombres,
            apellido_paterno: alumno.apellidoPaterno,
            apellido_materno: alumno.apellidoMaterno,
            correo_institucional: alumno.correoInstitucional,
            fecha_nacimiento: alumno.fechaNacimiento,
            sexo: alumno.sexo,
            direccion: alumno.direccion
        },
        where:{
            Id_alumno: idAlumno
        }
    });

    return {respuesta:'OK'};
}


export const eliminarAlumno = async (idAlumno: number) => {
    console.log('alumnoService::eliminarAlumno',idAlumno);
    await prisma.alumnos.delete({
        where: {
            Id_alumno: idAlumno
        }
    });
    return {respuesta:'OK'};
}