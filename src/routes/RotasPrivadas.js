import UserRotas from './UserRotas.js';
import PostRotas from './PostRotas.js';
import TagsRotas from './RotasTags.js';
import RotasCategorias from './RotasCategorias.js'
import MarcaRotas from './MarcaRotas.js';
import ProdutoRotas from './ProdutoRotas.js';
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
        const decoded = jwt.verify(token, process.env.APP_KEY_TOKEN)
        request.usuario = decoded;
        
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
RotasPrivadas.use(ProdutoRotas);
RotasPrivadas.get('/auth/usuario-logado', (req, res) => {
    const { username, email } = req.usuario;
    res.json({ nome: username, email });
});


export default RotasPrivadas