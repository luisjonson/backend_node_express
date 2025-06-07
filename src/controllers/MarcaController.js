import MarcaModel from '../model/MarcaModel.js';

class MarcaController {
    async listar(request, response) {
        const dados = await MarcaModel.findAll();
        return response.status(200).json(dados);
    }

    async consultarPorId(request, response) {
        const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);
        const dados = await MarcaModel.findByPk(id);

        if (!dados) {
            return response.status(404).json({
                message: "Marca não encontrado"
            })
        }

        return response.json(dados);
    }

    async criar(request, response) {
        try {
            const body = request.body;
            await MarcaModel.create(body);
            return response.status(201).json({
                message: `Marca cadastrado com sucesso`
            })

        } catch (error) {
            throw response.status(500).json({
                error: error.message
            });
        }
    }

    async atualizar(request, response) {
        // const id = parseInt(request.params.id, 10);
        console.log()
        const id = request.body.numsequencial;
        const dados = request.body;

        try {
            const [linhasAfetadas] = await MarcaModel.update(dados, {
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Marca não encontrado" });
            }

            return response.json({ message: "Marca atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao atualizar o Marca" });
        }
    }

    async deletar(request, response) {
        const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);

        try {
            const linhasAfetadas = await MarcaModel.destroy({
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Marca não encontrado." });
            }

            return response.json({ message: "Marca excluído com sucesso." });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Erro ao excluir o marca." });
        }
    }

    async isExisteEmailCadastrado(email) {
        return await MarcaModel.findOne({where: { email: email }});
    }
}

export default MarcaController;