import connection from '../config/connection.js';
import '../model/UserModel.js';
import '../model/TagsModel.js';
import '../model/CategoriaModel.js';
import '../model/ProdutoModel.js';


connection.sync({alter: true});