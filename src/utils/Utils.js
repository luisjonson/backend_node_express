import bcrypt from 'bcrypt';
import 'dotenv/config';

export const criptoPassword = async (senha) => {
  try {
    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
    const hash = await bcrypt.hash(senha, saltRounds);
    return hash;
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);
    throw error;
  }
};