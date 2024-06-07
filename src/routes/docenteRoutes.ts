import { eliminarDocente, insertarDocente, listarDocente, modificarDocente, obtenerDocente } from "../controllers/docenteController";
import express from 'express';

const router = express.Router();

router.post('/',insertarDocente);
router.get('/',listarDocente);
router.get('/:id',obtenerDocente);
router.put('/:id',modificarDocente);
router.delete('/:id',eliminarDocente);

export default router;