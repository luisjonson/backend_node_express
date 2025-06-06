import express from 'express';
import RotasPrivadas from './src/routes/RotasPrivadas.js';
import RotasPublicas from './src/routes/RotasPublicas.js';
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

app.use(RotasPublicas);
app.use(RotasPrivadas);


app.get('/', (request, response) =>{
    return response.status(200).send("Servidor Express no ar!")
});



app.listen(PORT,() =>{
    console.log(`Servidor exercultando na porta http://localhost:${PORT}`)
})
