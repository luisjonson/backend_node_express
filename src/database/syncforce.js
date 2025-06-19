import connection from '../config/connection.js';
import '../model/UserModel.js';
import '../model/CategoriaModel.js';
import '../model/ProdutoModel.js';
import '../model/MarcaModel.js';


connection.sync({alter: true});