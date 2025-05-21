class UsuarioModel {

    static lista = [
        {
        nome: "admin",
        Login: "admin",
        senha: "123"
        }
    ];

    static login(login, senha) {
       const indice = UsuarioModel.lista.findIndex(item => item.Login == login && item.senha == senha);
       return UsuarioModel.lista[indice];
    }
    static listar() {
        return UsuarioModel.lista;
    }

    static consultarPorId(id) {
        const dados = UsuarioModel.lista.filter(item => item.id === id);
        return dados;

    }

    static criar(data) {
        UsuarioModel.lista.push(data)
    }

    static atualizar(id, data) {

        const indice = UsuarioModel.lista.findIndex(item => item.id == id);
        UsuarioModel.lista[indice] = data;
    }

    static deletar(id) {
         const dados = UsuarioModel.lista.filter(item => item.id != id);
         return UsuarioModel.lista = dados;
    }
}

export default UsuarioModel;