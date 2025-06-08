import express from 'express';
import RotasPrivadas from './src/routes/RotasPrivadas.js';
import RotasPublicas from './src/routes/RotasPublicas.js';
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import cors from 'cors';

// const host = "localhost"
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
    // porta do seu frontend
    origin:'http://localhost:5173',
    // permite cookies
    credentials: true
}));  // ← habilita CORS para todas as origens
//Faz com que o express aceite as requisições do json.
app.use(express.json());

// Configuração do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API Express",
      version: "1.0.0",
      description: "Uma API simples com documentação Swagger",
      contact: {
        name: "Desenvolvedor",
        email: "dev@exemplo.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para este arquivo
}

const specs = swaggerJsdoc(options)

// Rota para servir a documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

app.use(RotasPublicas);
app.use(RotasPrivadas);


app.get('/', (request, response) =>{
    return response.status(200).send("Servidor Express no ar!")
});



app.listen(PORT,() =>{
    console.log(`Servidor exercultando na porta http://localhost:${PORT}`)
    console.log(`Documentação Swagger disponível em: http://localhost:${PORT}/api-docs`)
})
