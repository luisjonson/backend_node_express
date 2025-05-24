import TagsController from '../controllers/TagsController.js';
import express from 'express';
const TagsRotas = express.Router();

//começando na rota > vai para o controller > vai para o model > vai para o banco de dados
const tagsController = new TagsController();
TagsRotas.get('/tags', tagsController.listar)
TagsRotas.post('/tags', tagsController.criar)

export default TagsRotas;