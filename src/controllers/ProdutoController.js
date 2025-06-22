import MarcaModel from '../model/MarcaModel.js';
import CategoriaModel from '../model/CategoriaModel.js';
import ProdutoModel from '../model/ProdutoModel.js';

class ProdutoController {
    async listar(request, response) {
        try {
            const dados = await ProdutoModel.findAll({
                include: [
                    {
                        model: MarcaModel,
                        as: "marca_id",
                        attributes: ["numsequencial", "nome", "descricao", "ativo"],
                    },
                    {
                        model: CategoriaModel,
                        as: "categoria_id",
                        attributes: ["numsequencial", "nome", "ativo"],
                    },
                ],
                attributes: [
                    "numsequencial",
                    "titulo",
                    "preco",
                    "precoPromocional",
                    "linkImagem",
                    "descricao",
                    "queimaEstoque",
                    "colecao",
                    "emAlta",
                    "ofertaEspecial",
                    "genero",
                    "estadoProduto"
                ],
                order: [["numsequencial", "DESC"]],
                raw: false, // Manter objetos Sequelize para usar getters/setters
                nest: true, // Aninhar objetos relacionados
            })
            return response.status(200).json({
                success: true,
                data: dados,
                total: dados.length
            });

        } catch (error) {
            console.error("Erro ao listar produtos:", error)
            return response.status(500).json({
                success: false,
                message: "Erro Interno do servidor",
            })
        }
    }
    
    async consultarPorId(request, response) {
        
        try {
            const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);
            const dados = await ProdutoModel.findByPk(id,{
                include: [
                    {
                        model: MarcaModel,
                        as: "marca_id",
                        attributes: ["numsequencial", "nome", "descricao"], // Campos específicos
                    },
                ],
                attributes: [
                    "numsequencial",
                    "titulo",
                    "preco",
                    "precoPromocional",
                    "linkImagem",
                    "descricao"
                ],
                order: [["createdAt", "DESC"]],
                raw: false, // Manter objetos Sequelize para usar getters/setters
                nest: true, // Aninhar objetos relacionados
            });
            if (!dados) {
                return response.status(404).json({
                    message: `Produto de id ${id}, não encontrado`
                })
            }
            
            return response.status(200).json({
                success: true,
                data: dados,
            });

        } catch (error) {
            console.error(`Erro ao consultar produto ${id}:`, error)
            return response.status(500).json({
                success: falso,
                message: "Erro Interno do servidor",
            })
        }
    }

    async criar(request, response) {
        try {
            const body = request.body;
            const dados = await ProdutoModel.create(body);
            return response.status(201).json({
                success: true,
                data: dados.data,
                message: `Produto cadastrado com sucesso`
            })

        } catch (error) {
            console.log("Erro ao cadastrar produto:", error);
            throw response.status(404).json({
                error: "Erro ao cadastrar produto",
                message: error.message || "Erro ao cadastrar produto"
            });
        }
    }

    async atualizar(request, response) {
        const id = request.body.numsequencial;
        const dados = request.body;

        try {
            const [linhasAfetadas] = await ProdutoModel.update(dados, {
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Produto não encontrado" });
            }

            return response.status(200).json({
                success: true,
                data: dados,
                message: "Produto atualizado com sucesso."
            });
        } catch (error) {
            console.error(`Erro ao atualizar o produto ${id}:`, error)
            return response.status(500).json({
                success: falso,
                message: "Erro Interno do servidor",
            })
        }
    }

    async deletar(request, response) {
        
        try {
            const id = parseInt(request.params.id, process.env.PARSE_INT_BASE);
            const linhasAfetadas = await ProdutoModel.destroy({
                where: { numsequencial: id }
            });

            if (linhasAfetadas === 0) {
                return response.status(404).json({ error: "Produto não encontrado." });
            }

            return response.json({ 
                success: true,
                message: "Produto excluído com sucesso." 
            });
        } catch (error) {
            console.error(`Erro ao deletar o produto ${id}:`, error)
            return response.status(500).json({
                success: falso,
                message: "Erro Interno do servidor",
            })
        }
    }

    async isExisteEmailCadastrado(email) {
        return await MarcaModel.findOne({where: { email: email }});
    }
}

export default ProdutoController;