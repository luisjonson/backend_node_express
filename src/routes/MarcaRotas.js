import express from 'express';
import MarcaController from '../controllers/MarcaController.js';
const MarcaRotas = express.Router();


const marcaController = new MarcaController();

MarcaRotas.post('/marca', (req, res) => marcaController.criar(req, res))
MarcaRotas.get('/marca/:id', marcaController.consultarPorId)
MarcaRotas.get('/marca', marcaController.listar);
MarcaRotas.patch('/marca', marcaController.atualizar);
MarcaRotas.delete('/marca/:id', marcaController.deletar);

export default MarcaRotas;