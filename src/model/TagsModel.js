import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class TagsModel extends Model {}

TagsModel.init({
    usernumsequencial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    tableName: 'tbtagsmodel',
    sequelize: connection,
});

export default TagsModel;