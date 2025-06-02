import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class ProdutoModel extends Model { }

ProdutoModel.init({
    numsequencial: {
      field: 'pronumsequencial',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        field: 'protitulo',
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
      field: 'propreco',
      type: DataTypes.DECIMAL(10, 2), // Até 99.999.999,99
      allowNull: false
    },
    descricao: {
        field: 'prodescricao',
        type: DataTypes.STRING,
        allowNull: true
    },
    linkImagem: {
        field: 'prolinkimagem',
        type: DataTypes.STRING,
        allowNull: false
    },
    precoPromocional: {
      field: 'proprecopromocional',
      type: DataTypes.DECIMAL(10, 2), // Até 99.999.999,99
      allowNull: true
    },
},
{
  tableName: 'tbproduto',
  sequelize: connection,
});

export default ProdutoModel;