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
    ativo:{
      field: 'catativo',
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
},
{
  tableName: 'tbcategoria',
  sequelize: connection,
  timestamps: false
});

export default CategoriaModel;