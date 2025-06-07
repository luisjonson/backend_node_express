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

export const compareSenha = async (senha, hashArmazenado) => {
  return await bcrypt.compare(senha, hashArmazenado);
}

export const spirationTime = (seconds, minute) => {
  return Math.floor(Date.now() / 1000) + (seconds * minute)
}

export const extrairToken = (request, response) =>{
    const cookieHeader = request.headers.cookie;
    const token = cookieHeader?.split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];

    return token;
}
