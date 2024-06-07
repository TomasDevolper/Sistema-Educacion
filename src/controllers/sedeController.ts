import { Request, Response } from "express";
import * as sedeService from "../services/sedeService";

export const insertarSede = async (req: Request, res: Response) => {
    try {
        const response = await sedeService.insertarSede(req.body);
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const listarSedes = async (req: Request, res: Response) => {
    try {
        const sedes = await sedeService.listarSedes();
        res.status(200).json(sedes);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

export const obtenerSede = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const sede = await sedeService.obtenerSede(Number(id));
        res.status(200).json(sede);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

export const modificarSede = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await sedeService.modificarSede(Number(id), req.body);
        res.send('Ok');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const eliminarSede = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await sedeService.eliminarSede(Number(id));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
}