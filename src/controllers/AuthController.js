import UsuarioModel from "../model/UsuarioModel.js";

class AuthController {
    login(login, senha) {
        const dados = UsuarioModel.login(login, senha)
        return dados;
    }
}

export default AuthController;