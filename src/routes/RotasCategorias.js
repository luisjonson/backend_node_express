import CategoriaController from '../controllers/CategoriaControler.js';
import express from 'express';
const RotasCategorias = express.Router();

//começando na rota > vai para o controller > vai para o model > vai para o banco de dados
const categoriaController = new CategoriaController();
RotasCategorias.post('/categorias', categoriaController.criar)
RotasCategorias.put('/categorias/:id', categoriaController.atualizar);
RotasCategorias.delete('/categorias/:id', categoriaController.deletar);

export default RotasCategorias;