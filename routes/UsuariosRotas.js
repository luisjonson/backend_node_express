const express = require ('express');
const UsuariosRotas = express.Router();



UsuariosRotas.get('/users', (request, response)=>{
    const lista =[
        {id: 1, nome:'Admin'},
        {id: 2, nome:'Teste'}
    ]
    return response.status(200).json(lista);
})

UsuariosRotas.post('/users', (request, response)=>{
    return response.status(200).send('usuario adicionado');
})

UsuariosRotas.delete('/users', (request, response)=>{
    return response.status(200).send('Usuario deletado');
});

UsuariosRotas.put('/users', (request, response)=>{
    
    return response.status(200).send('Usuario atualizado');
});

module.exports = UsuariosRotas;