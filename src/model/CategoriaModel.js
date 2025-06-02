import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class CategoriaModel extends Model { }


CategoriaModel.init({
    numsequencial: {
      field: 'catnumsequencial',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        field: 'catnome',
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
  tableName: 'tbcategoria',
  sequelize: connection,
});

export default CategoriaModel;