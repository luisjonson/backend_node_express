import connection from '../config/connection.js';
import '../model/UserModel.js';
import '../model/TagsModel.js';

connection.sync({force:true});