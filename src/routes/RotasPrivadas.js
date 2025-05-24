import UsuariosRotas from './UsuariosRotas.js';
import PostRotas from './PostRotas.js';
import TagsRotas from './RotasTags.js';
import jwt from 'jsonwebtoken';
import express from 'express';
import 'dotenv/config'

const RotasPrivadas = express.Router();

// Middleware para verificar se o usuário está autenticado
RotasPrivadas.use((request, response, next) => {

    let auth = false;
    if (request.headers.token) {
        const {token} = request.headers;
        try{
            jwt.verify(token, process.env.APP_KEY_TOKEN);
            auth=true

        }catch(e){
            return response.status(403).send("token invalido ou expirado");
        }
    }
    if(auth==false){
        return response.status(403).send("Acesso negado");
    }
    
    next();
});



RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostRotas);
RotasPrivadas.use(TagsRotas);


export default RotasPrivadas