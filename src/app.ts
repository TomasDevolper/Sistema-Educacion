/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';

import alumnoRoutes from './routes/alumnoRoutes';
import carreraRoutes from './routes/carreraRoutes';
import perfilRoutes from './routes/perfilRoutes';
import sedeRoutes from './routes/sedeRoutes';
import docenteRoutes from './routes/docenteRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/alumnos',alumnoRoutes);
app.use('/api/v1/docente',docenteRoutes);
app.use('/api/v1/carrera',carreraRoutes);
app.use('/api/v1/sede',sedeRoutes);
app.use('/api/v1/perfil',perfilRoutes);

export default app;
