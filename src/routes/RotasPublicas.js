import express from 'express';
import AuthControlle from '../controllers/AuthController.js';
import jwt from 'jsonwebtoken';

const RotasPublicas = express.Router();

RotasPublicas.post('/login', (request, response) => {
    const { login, senha } = request.body;
    const auth = new AuthControlle();
    const dados = auth.login(login, senha)

    if(dados){
        const token = jwt.sign(dados,'54163513213bnjkjkjbg1325gf13');
        return response.status(200).json({
            token: token
        })
    }

    return response.status(401).json({
        message: "Usuário ou senha inválidos"
    })
});



export default RotasPublicas