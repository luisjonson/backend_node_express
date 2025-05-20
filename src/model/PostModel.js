class PostModel{

     static lista = [      
    ];

    static listar() {
        return PostModel.lista;
    }

    static consultarPorId(id) {
        const dados = PostModel.lista.filter(item => item.id === id);
        return dados;

    }

    static criar(data) {
        PostModel.lista.push(data)
    }

    static atualizar(id, data) {

        const indice = PostModel.lista.findIndex(item => item.id == id);
        PostModel.lista[indice] = data;
    }

    static deletar(id) {
         const dados = PostModel.lista.filter(item => item.id != id);
         return PostModel.lista = dados;
    }
}


export default PostModel;