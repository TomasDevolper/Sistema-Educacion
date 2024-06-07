import { Request, Response } from "express";
import * as carreraService from "../services/carreraService";

export const insertarCarrera = async (req: Request, res: Response) => {
    try {
        const response = await carreraService.insertarCarrera(req.body);
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const listarCarreras = async (req: Request, res: Response) => {
    try {
        const carreras = await carreraService.listarCarreras();
        res.status(200).json(carreras);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const obtenerCarrera = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const carrera = await carreraService.obtenerCarrera(Number(id));
        res.status(200).json(carrera);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const modificarCarrera = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await carreraService.modificarCarrera(Number(id), req.body);
        res.send('OK');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const eliminarCarrera = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await carreraService.eliminarCarrera(Number(id));
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}