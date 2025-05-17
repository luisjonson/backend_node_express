const express = require ('express');
const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRotas = express.Router();


const usuarioController = new UsuariosController();

UsuariosRotas.post('/users', usuarioController.criar)
UsuariosRotas.get('/users', usuarioController.listar);
UsuariosRotas.put('/users', usuarioController.atualizar);
UsuariosRotas.delete('/users', usuarioController.deletar);

module.exports = UsuariosRotas;