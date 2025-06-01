import UserModel from "../model/UserModel.js";
import { compareSenha, spirationTime } from '../utils/Utils.js';
import jwt from 'jsonwebtoken';

class AuthController {
    async login(request, response) {
        const { login, senha } = request.body;

        try {
            const usuario = await UserModel.findOne({
                where: { email:login }
            });

            if (!usuario) {
                return response.status(401).json({ erro: 'Usuário ou senha inválidos' });
            }

            const senhaConfere = await compareSenha(senha, usuario.senha);

            if (!senhaConfere) {
                return response.status(401).json({ erro: 'Usuário ou senha inválidos' });
            }

            const dataToken = {
                id: usuario.usernumsequencial,
                username: usuario.nome,
                email: usuario.email,
                exp: spirationTime(60,30) 
            };

            const token = jwt.sign(dataToken, process.env.APP_KEY_TOKEN);

            return response.status(200).json({ token });
        } catch (error) {
            return response.status(500).json({ erro: 'Erro interno no login', detalhe: error.message });
        }
    }
}

export default AuthController;
