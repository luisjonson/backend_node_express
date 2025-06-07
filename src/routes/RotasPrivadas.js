import UserRotas from './UserRotas.js';
import PostRotas from './PostRotas.js';
import TagsRotas from './RotasTags.js';
import RotasCategorias from './RotasCategorias.js'
import MarcaRotas from './MarcaRotas.js';
import jwt from 'jsonwebtoken';
import express from 'express';
import { extrairToken } from '../utils/Utils.js';
import 'dotenv/config'

const RotasPrivadas = express.Router();

// Middleware para verificar se o usuário está autenticado
RotasPrivadas.use((request, response, next) => {
    const token = extrairToken(request) // lê o cookie "token"
    // const token = request.headers.token;

    if(!token) throw response.status(401).json({error: 'Acesso negado.'})

    try {
        jwt.verify(token, process.env.APP_KEY_TOKEN)
        
    } catch (jsonwebtokenError) {
        return response.status(403).json({
            message: 'Não autorizado'
        })
    }
    next();
});

RotasPrivadas.use(UserRotas);
RotasPrivadas.use(PostRotas);
RotasPrivadas.use(TagsRotas);
RotasPrivadas.use(RotasCategorias);
RotasPrivadas.use(MarcaRotas);


export default RotasPrivadas