import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";
import MarcaModel from "./MarcaModel.js";

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
    marca:{
      field:'promarca',
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        promodel:"tbmarca",
        key:"marnumsequencial"
      }
    }
},
{
  tableName: 'tbproduto',
  sequelize: connection,
});

ProdutoModel.belongsTo(MarcaModel,{
  foreignKey: "marca",
  as: "marca_id",
})

export default ProdutoModel;