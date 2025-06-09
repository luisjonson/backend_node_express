import ProdutoController from '../controllers/ProdutoController.js';
import express from 'express';

const ProdutoRotas = express.Router();
const produtoController = new ProdutoController;

ProdutoRotas.post('/produto', (req, res) => produtoController.criar(req, res))
ProdutoRotas.get('/produto/:id', produtoController.consultarPorId)
ProdutoRotas.patch('/produto', produtoController.atualizar);
ProdutoRotas.delete('/produto/:id', produtoController.deletar);

export default ProdutoRotas;