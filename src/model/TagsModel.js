import { DataTypes, Model } from "sequelize";
import connection from "../config/database.js";

class TagsModel extends Model {}

TagsModel.init({
    
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
}, {
    tableName: 'tbtagsmodel',
    sequelize: connection,
});

export default TagsModel;