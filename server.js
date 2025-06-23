import express from 'express';
import RotasPrivadas from './src/routes/RotasPrivadas.js';
import RotasPublicas from './src/routes/RotasPublicas.js';
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || localhost;
const HOST_FRONT = process.env.HOST_FRONT || localhost;
const app = express();

app.use(cors({
    // porta do seu frontend
    origin:`http://${HOST_FRONT}:5173`,
    // permite cookies
    credentials: true
}));  
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
        name: "Luis Lindonjonson",
        email: "dev@exemplo.com",
      },
    },
    servers: [
      {
        url: `http://${HOST}:${PORT}`,
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ['./src/routes/*.js'],
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
    console.log(`Servidor exercultando na porta http://${HOST}:${PORT}`)
    console.log(`Documentação Swagger disponível em: http://${HOST}:${PORT}/api-docs`)
})
