import bcrypt from 'bcrypt';
import 'dotenv/config';

export const criptoPassword = async (senha) => {
  try {
    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
    return await bcrypt.hash(senha, saltRounds);
  } catch (error) {
    throw error;
  }
};