import express from 'express';
import AuthController from '../controllers/AuthController.js';
import CategoriaController from '../controllers/CategoriaControler.js';

const RotasPublicas = express.Router();

const auth = new AuthController();
const categoria = new CategoriaController();
RotasPublicas.post('/login', (req, res) => auth.login(req, res));
RotasPublicas.get('/categorias', categoria.listar)

export default RotasPublicas;