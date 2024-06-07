import { Request, Response } from "express";
import * as perfilService from "../services/perfilService";

export const insertarPerfil = async (req: Request, res: Response) => {
    try {
        const response = await perfilService.insertarPerfil(req.body);
        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const listarPerfil = async (req: Request, res: Response) => {
    try {
        const perfiles = await perfilService.listarPerfil();
        res.status(200).json(perfiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const obtenerPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const perfil = await perfilService.obtenerPerfil(Number(id));
        res.status(200).json(perfil);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const modificarPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await perfilService.modificarPerfil(Number(id), req.body);
        res.send('Ok');
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}

export const eliminarPerfil = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await perfilService.eliminarPerfil(Number(id));
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error
        });
    }
}