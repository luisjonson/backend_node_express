import express from 'express';
import UserController from '../controllers/UserController.js';
const UserRotas = express.Router();


const usuarioController = new UserController();

UserRotas.post('/users', (req, res) => usuarioController.criar(req, res))
UserRotas.get('/users/:id', usuarioController.consultarPorId)
UserRotas.get('/users', usuarioController.listar);
UserRotas.put('/users/:id', usuarioController.atualizar);
UserRotas.delete('/users/:id', usuarioController.deletar);

export default UserRotas;