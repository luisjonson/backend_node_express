import CategoriaModel from "../model/CategoriaModel.js";

class CategoriaController{
    async listar(req, res) {
        let tags = await CategoriaModel.findAll({
            attributes:['numsequencial','nome', 'ativo']
        });
        return res.json(tags);
    }

    criar(req, res) {
        let body = req.body;
        CategoriaModel.create(body)
            .then((tags) => {
                return res.status(201).json(tags);
            })
            .catch((error) => {
                return res.status(500).json({ error: error.message });
            });
    }

    async atualizar(request, response) {
        const id = parseInt(request.params.id, 10);
        const dados = request.body;

        try {
            const [linhasAfetadas] = await CategoriaModel.update(dados, {
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ message: "Categoria não encontrado" });
            }

            return response.json({ message: "Categoria atualizado com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao atualizar o categoria" });
        }
    }

    async deletar(request, response) {
        const id = parseInt(request.params.id, 10);

        try {
            const linhasAfetadas = await CategoriaModel.destroy({
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ message: "Categoria não encontrado" });
            }

            return response.json({ message: "Categoria excluído com sucesso" });
        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: "Erro ao excluir o categoria" });
        }
    }
}

export default CategoriaController;