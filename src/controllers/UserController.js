import UserModel from '../model/UserModel.js';
import { criptoPassword } from '../utils/Utils.js';

class UserController {
    async listar(request, response) {
        const dados = await UserModel.findAll();
        return response.status(200).json(dados);
    }

    async consultarPorId(request, response) {
        const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);
        const dados = await UserModel.findByPk(id);

        if (!dados) {
            return response.status(404).json({
                message: "Usuário não encontrado"
            })
        }

        return response.json(dados);
    }

    async criar(request, response) {
        try {
            const body = request.body;

            if(!!await this.isExisteEmailCadastrado(body.email)){
                throw response.status(400).json({ error: 'Email já cadastrado' });
            }
            
            if (body.senha) {
                body.senha = await criptoPassword(body.senha);
            }

           const usuario = await UserModel.create(body);
            return response.status(201).json({
                message: `Usuário cadastrado com sucesso ${usuario.numsequencial}`
            })

        } catch (error) {
            throw response.status(500).json({
                // message: "Erro ao cadastrar o usuário",
                error: error.message
            });
        }
    }

    async atualizar(request, response) {
        const id = parseInt(request.params.id, 10);
        const dados = request.body;

        try {
            const [linhasAfetadas] = await UserModel.update(dados, {
                where: { id: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            return response.json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao atualizar o usuário" });
        }
    }

    async deletar(request, response) {
        const id = parseInt(request.params.id, 10);

        try {
            const linhasAfetadas = await UserModel.destroy({
                where: { id: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Usuário não encontrado" });
            }

            return response.json({ message: "Usuário excluído com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao excluir o usuário" });
        }
    }

    async isExisteEmailCadastrado(email) {
        return await UserModel.findOne({where: { email: email }});
    }
}

export default UserController;