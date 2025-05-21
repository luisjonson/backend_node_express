import express from 'express';
import AuthControlle from '../controllers/AuthController.js';

const RotasPublicas = express.Router();

RotasPublicas.post('/login', (request, response) => {
    const { login, senha } = request.body;
    const auth = new AuthControlle();
    const dados = auth.login(login, senha)

    if(dados){
        return response.status(200).json({
            token: dados
        })
    }

    return response.status(401).json({
        message: "Usuário ou senha inválidos"
    })
});



export default RotasPublicas