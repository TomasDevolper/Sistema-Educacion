import { eliminarSede, insertarSede, listarSedes, modificarSede, obtenerSede } from "../controllers/sedeController";
import express from 'express';

const router = express.Router();

router.post('/',insertarSede);
router.get('/',listarSedes);
router.get('/:id',obtenerSede);
router.put('/:id',modificarSede);
router.delete('/:id',eliminarSede);

export default router;