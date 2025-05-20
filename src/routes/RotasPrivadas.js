import express from 'express';
import  UsuariosRotas from'./UsuariosRotas.js';
import PostRotas from './PostRotas.js'; 

const RotasPrivadas = express.Router();

// Middleware para verificar se o usuário está autenticado
RotasPrivadas.use((request, response, next) => {
    console.log("Middleware de autenticação");
    return response.status(403).send("Acesso negado");
    next();
});



RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostRotas);


export default RotasPrivadas