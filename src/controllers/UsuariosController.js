import UsuarioModel from '../model/UsuarioModel.js';
import { criptoPassword } from '../utils/Utils.js';

class UsuariosController {
    async listar(request, response) {
        const dados = await UsuarioModel.findAll();
        return response.status(200).json(dados);
    }

    async consultarPorId(request, response) {
        const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);
        const dados = await UsuarioModel.findByPk(id);

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
                return response.status(400).json({ error: 'Email já cadastrado' });
            }
            
            if (body.senha) {
                body.senha = await criptoPassword(body.senha);
            }

            await UsuarioModel.create(body);
            return response.status(201).json({
                message: "Usuário cadastrado com sucesso"
            })

        } catch (error) {
            return response.status(500).json({
                // message: "Erro ao cadastrar o usuário",
                error: error.message
            });
        }
    }

    async atualizar(request, response) {
        const id = parseInt(request.params.id, 10);
        const dados = request.body;

        try {
            const [linhasAfetadas] = await UsuarioModel.update(dados, {
                where: { id: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }

            return response.json({ message: "Usuário atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao atualizar o usuário" });
        }
    }

    async deletar(request, response) {
        const id = parseInt(request.params.id, 10);

        try {
            const linhasAfetadas = await UsuarioModel.destroy({
                where: { id: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ message: "Usuário não encontrado" });
            }

            return response.json({ message: "Usuário excluído com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao excluir o usuário" });
        }
    }

    async isExisteEmailCadastrado(email) {
        return await UsuarioModel.findOne({where: { email: email }});
    }
}

export default UsuariosController;