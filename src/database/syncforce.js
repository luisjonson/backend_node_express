import connection from '../config/database.js';
import '../model/UserTypeModel.js';
import '../model/TagsModel.js';

connection.sync({force:true});