import express from 'express';
import AuthController from '../controllers/AuthController.js';

const RotasPublicas = express.Router();

const auth = new AuthController();
RotasPublicas.post('/login', (req, res) => auth.login(req, res));

export default RotasPublicas;