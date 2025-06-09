import express from 'express';
import AuthController from '../controllers/AuthController.js';
import CategoriaController from '../controllers/CategoriaControler.js';
import MarcaController from '../controllers/MarcaController.js';
import ProdutoController from '../controllers/ProdutoController.js';

const RotasPublicas = express.Router();

const auth = new AuthController();
const categorias = new CategoriaController();
const marcas = new MarcaController();
const produtos = new ProdutoController();
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login e define o token em cookie
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             example:
 *               email: usuario@exemplo.com
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Bem vindo.
 *       401:
 *         description: Usuário ou senha inválidos
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
RotasPublicas.post('/login', (req, res) => auth.login(req, res));

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   numsequencial:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   ativo:
 *                     type: boolean
 *       500:
 *         description: Erro interno no servidor
 */
RotasPublicas.get('/categorias', categorias.listar);
RotasPublicas.get('/marcas', marcas.listar);
RotasPublicas.get('/produtos', produtos.listar);

export default RotasPublicas;