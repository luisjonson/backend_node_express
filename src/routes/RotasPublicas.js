import express from 'express';
import AuthControlle from '../controllers/AuthController.js';
import jwt from 'jsonwebtoken';
import 'dotenv/config'
const RotasPublicas = express.Router();
const umMinuto = 1000

RotasPublicas.post('/login', async (request, response) => {
    const { login, senha } = request.body;
    const auth = new AuthControlle();
    const dados = await auth.login(login, senha)

    if(dados){
        const dataToken ={
            id: dados.id,
            email: dados.email,
            username: dados.nome,
            //Tempo de expiração do token 
            exp: Math.floor(Date.now() / 1000) + (60 * 60) // 3600 segundo
        }

        const token = jwt.sign(dataToken, process.env.APP_KEY_TOKEN);
        return response.status(200).json({
            token: token
        })
    }

    return response.status(401).json({
        message: "Usuário ou senha inválidos"
    })
});



export default RotasPublicas