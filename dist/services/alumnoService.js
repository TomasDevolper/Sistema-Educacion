"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarAlumno = exports.modificarAlumno = exports.obtenerAlumno = exports.listarAlumnos = exports.insertarAlumno = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertarAlumno = (alumno) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.alumnos.create({
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
        }
    });
    return { respuesta: 'OK' };
});
exports.insertarAlumno = insertarAlumno;
const listarAlumnos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.alumnos.findMany();
});
exports.listarAlumnos = listarAlumnos;
const obtenerAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::obtenerAlumno', idAlumno);
    return yield prisma.alumnos.findUnique({
        where: {
            Id_alumno: idAlumno
        }
    });
});
exports.obtenerAlumno = obtenerAlumno;
const modificarAlumno = (idAlumno, alumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::modificarAlumno', idAlumno, alumno);
    yield prisma.alumnos.update({
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
        where: {
            Id_alumno: idAlumno
        }
    });
    return { respuesta: 'OK' };
});
exports.modificarAlumno = modificarAlumno;
const eliminarAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::eliminarAlumno', idAlumno);
    yield prisma.alumnos.delete({
        where: {
            Id_alumno: idAlumno
        }
    });
    return { respuesta: 'OK' };
});
exports.eliminarAlumno = eliminarAlumno;
//# sourceMappingURL=alumnoService.js.map