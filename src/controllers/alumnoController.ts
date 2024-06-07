import { Request, Response } from "express"
import * as alumnoService from "../services/alumnoService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::insertarAlumno');
    try {
        const response = await alumnoService.insertarAlumno(req.body);
        res.status(200).json(ResponseModel.success(response));
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const listarAlumnos = async (req: Request, res: Response) => {
    console.log('alumnoController::listarAlumnos');
    try {
        const alumnos = await alumnoService.listarAlumnos();
        res.status(200).json(ResponseModel.success(alumnos));
    } catch (error) {
        res.status(500).json({error: error})
        console.error(error)
    }
    
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::obtenerAlumno');
    try {
        const { id } = req.params;
        const alumno = await alumnoService.obtenerAlumno(Number(id))
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}

export const modificarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::modificarAlumno');
    try {
        const { id } = req.params;
        const response = await alumnoService.modificarAlumno(Number(id),req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::eliminarAlumno');
    try {
        const { id } = req.params;
        const response = await alumnoService.eliminarAlumno(Number(id));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}

