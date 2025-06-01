import UserModel from "../model/UserModel.js";
import { criptoPassword } from '../utils/Utils.js';

class AuthController {
   async login(login, senha) {
       const dados = await UserModel.findAll({
            where:{
                email: login,
                senha: criptoPassword(senha)
            }
        })

        if(dados.length){
            return dados[0];
        }

        return null;
    }
}

export default AuthController;