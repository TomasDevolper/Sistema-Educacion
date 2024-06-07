import { alumnos } from "@prisma/client"
import { IAlumno } from "../models/Alumno"

export const fromPrismaAlumno = (alumno: alumnos): Partial<IAlumno> => ({
    idAlumno: 1,
    codigo: alumno.codigo,
    documentoIdentidad: alumno.documento_Identidad,
    nombres: alumno.nombres,
    apellidoPaterno: alumno.apellido_paterno,
    apellidoMaterno: alumno.apellido_materno,
    correoInstitucional: alumno.correo_institucional,
    fechaNacimiento: alumno.fecha_nacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion
});

export const toPrismaAlumno = (alumno: alumnos): Partial<IAlumno> => ({
    codigo: alumno.codigo,
    documentoIdentidad: alumno.documento_Identidad,
    nombres: alumno.nombres,
    apellidoPaterno: alumno.apellido_paterno,
    apellidoMaterno: alumno.apellido_materno,
    correoInstitucional: alumno.correo_institucional,
    fechaNacimiento: alumno.fecha_nacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion

});