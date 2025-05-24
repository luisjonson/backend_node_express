import sequelize from './src/config/database.js';

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
}

syncDatabase();