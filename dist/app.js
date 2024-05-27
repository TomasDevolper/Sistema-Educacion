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
const app = (0, express_1.default)();
//Database
//Midlewares
//Routes
app.use('/api/v1/alumnos', alumnoRoutes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map