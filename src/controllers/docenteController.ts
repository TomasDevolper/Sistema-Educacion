import { Request, Response } from "express"
import * as docenteService from "../services/docenteService";

export const insertarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::insertarDocente');
    try {
        const response = await docenteService.insertarDocente(req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const listarDocente = async (req: Request, res: Response) => {
    console.log('Docenteeontroller::listarDocente');
    try {
        const doce = await docenteService.listarDocente();
        res.status(200).json(doce);
    } catch (error) {
        res.status(500).json({error: error})
        console.error(error)
    }
    
}

export const obtenerDocente = async (req: Request, res: Response) => {
    console.log('DocenteController::obtenerDocente');
    try {
        const { id } = req.params;
        const doce = await docenteService.obtenerDocente(Number(id))
        res.status(200).json(doce);
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}

export const modificarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::modificarDocente');
    try {
        const { id } = req.params;
        const response = await docenteService.modificarDocente(Number(id),req.body)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
}

export const eliminarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::docente');
    try {
        const { id } = req.params;
        const response = await docenteService.eliminarDocente(Number(id));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error})
    }
    
}