"use strict";
/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alumnoRoutes_1 = __importDefault(require("./routes/alumnoRoutes"));
const carreraRoutes_1 = __importDefault(require("./routes/carreraRoutes"));
const perfilRoutes_1 = __importDefault(require("./routes/perfilRoutes"));
const sedeRoutes_1 = __importDefault(require("./routes/sedeRoutes"));
const docenteRoutes_1 = __importDefault(require("./routes/docenteRoutes"));
const app = (0, express_1.default)();
//Database
//Midlewares
app.use(express_1.default.json());
//Routes
app.use('/api/v1/alumnos', alumnoRoutes_1.default);
app.use('/api/v1/docente', docenteRoutes_1.default);
app.use('/api/v1/carrera', carreraRoutes_1.default);
app.use('/api/v1/sede', sedeRoutes_1.default);
app.use('/api/v1/perfil', perfilRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map