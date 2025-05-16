const express = require('express');
const UsuariosRotas = require('./routes/UsuariosRotas');

const host = "localhost"
const port = "3000"
const app = express();

app.use(UsuariosRotas);


app.get('/', (request, response) =>{
    return response.status(200).send(" ola")
});

app.listen(3000,host,() =>{
    console.log(`Servidor exercultando em http://${host}:${port}`)
})
