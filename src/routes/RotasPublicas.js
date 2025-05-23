import express from 'express';
import AuthControlle from '../controllers/AuthController.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
const RotasPublicas = express.Router();

RotasPublicas.post('/login', (request, response) => {
    const { login, senha } = request.body;
    const auth = new AuthControlle();
    const dados = auth.login(login, senha)

    if(dados){
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN);
        return response.status(200).json({
            token: token
        })
    }

    return response.status(401).json({
        message: "Usuário ou senha inválidos"
    })
});



export default RotasPublicas