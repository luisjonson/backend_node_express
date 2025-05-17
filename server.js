const express = require('express');
const UsuariosRotas = require('./routes/UsuariosRotas');

// const host = "localhost"
const PORT = process.env.PORT || 3000;
const app = express();

app.use(UsuariosRotas);


app.get('/', (request, response) =>{
    return response.status(200).send("res.send('Servidor Express no ar!'")
});



app.listen(PORT,() =>{
    console.log(`Servidor exercultando na porta ${PORT}`)
})
