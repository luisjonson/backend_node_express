import UserRotas from './UserRotas.js';
import PostRotas from './PostRotas.js';
import TagsRotas from './RotasTags.js';
import jwt from 'jsonwebtoken';
import express from 'express';
import 'dotenv/config'

const RotasPrivadas = express.Router();

// Middleware para verificar se o usuário está autenticado
RotasPrivadas.use((request, response, next) => {

    const token = request.headers.token;
    try {
        jwt.verify(token, process.env.APP_KEY_TOKEN)
        
    } catch (jsonwebtokenError) {
        return response.status(403).json({
            message: 'Não autorizado 10'
        })
    }
    next();
});

RotasPrivadas.use(UserRotas);
RotasPrivadas.use(PostRotas);
RotasPrivadas.use(TagsRotas);


export default RotasPrivadas