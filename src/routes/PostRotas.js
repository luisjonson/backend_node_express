import  express from 'express'
import PostController from '../controllers/PostController.js';
const PostRotas = express.Router();


const postController = new PostController();

PostRotas.post('/Posts', postController.criar)
PostRotas.get('/Posts/:id', postController.consultarPorId)
PostRotas.get('/Posts', postController.listar);
PostRotas.put('/Posts/:id', postController.atualizar);
PostRotas.delete('/Posts/:id', postController.deletar);

export default PostRotas;