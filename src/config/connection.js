import 'dotenv/config';
import { Sequelize} from 'sequelize';

// Configuração da conexão com o banco de dados
const connection = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_SENHA, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
    logging: false, 
    // logging: (msg) => console.debug('SQL:', msg)
});

export default connection;