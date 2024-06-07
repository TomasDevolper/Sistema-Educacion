import { eliminarPerfil, insertarPerfil, listarPerfil, modificarPerfil, obtenerPerfil } from "../controllers/perfilController";
import express from 'express';

const router = express.Router();

router.post('/',insertarPerfil);
router.get('/',listarPerfil);
router.get('/:id',obtenerPerfil);
router.put('/:id',modificarPerfil);
router.delete('/:id',eliminarPerfil);

export default router;