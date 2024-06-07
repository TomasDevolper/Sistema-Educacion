import { eliminarCarrera, insertarCarrera, listarCarreras, modificarCarrera, obtenerCarrera } from "../controllers/carreraController";
import express from 'express';

const router = express.Router();

router.post('/',insertarCarrera);
router.get('/',listarCarreras);
router.get('/:id',obtenerCarrera);
router.put('/:id',modificarCarrera);
router.delete('/:id',eliminarCarrera);

export default router;