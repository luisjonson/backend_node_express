import express from 'express';
import UsuariosController from '../controllers/UsuariosController.js';
const UsuariosRotas = express.Router();


const usuarioController = new UsuariosController();

UsuariosRotas.post('/users', usuarioController.criar)
UsuariosRotas.get('/users/:id', usuarioController.consultarPorId)
UsuariosRotas.get('/users', usuarioController.listar);
UsuariosRotas.put('/users/:id', usuarioController.atualizar);
UsuariosRotas.delete('/users/:id', usuarioController.deletar);

export default UsuariosRotas;