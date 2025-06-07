import UserModel from "../model/UserModel.js";
import { compareSenha, spirationTime } from '../utils/Utils.js';
import  cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

class AuthController {
    async login(request, response) {
        const { login, senha } = request.body;

        try {
            const usuario = await UserModel.findOne({
                where: { email:login }
            });

            if (!usuario) {
                throw response.status(401).json({ erro: 'Usuário ou senha inválidos' });
            }

            const senhaConfere = await compareSenha(senha, usuario.senha);

            if (!senhaConfere) {
                throw response.status(401).json({ erro: 'Usuário ou senha inválidos' });
            }

            const dataToken = {
                id: usuario.usernumsequencial,
                username: usuario.nome,
                email: usuario.email,
                exp: spirationTime(60,30) 
            };

            const token = jwt.sign(dataToken, process.env.APP_KEY_TOKEN);

            response.cookie('token', token, {
                httpOnly: true,
                secure: false, // true em produção (HTTPS)
                sameSite: 'lax',
                maxAge: 3600000
            });
            

            return response.status(200).json({message:'Bem vindo.'})
        } catch (error) {
            throw response.status(500).json({ erro: 'Erro interno no login', detalhe: error.message });
        }
    }

    async logout(request, response) {
        response.clearCookie('token');
        response.json({ message: 'Deslogado com sucesso' });
    };

}

export default AuthController;
