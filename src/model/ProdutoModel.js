import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";
import MarcaModel from "./MarcaModel.js";
import CategoriaModel from "./CategoriaModel.js";

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
    genero:{
      field: 'progenero',
      type: DataTypes.STRING,
      allowNull: false
    },
    estadoProduto:{
      field: 'proestadoproduto',
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
        model:"tbmarca",
        key:"marnumsequencial"
      }
    },
    categoria:{
      field:'procategoria',
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:"tbcategoria",
        key:"catnumsequencial"
      }
    },
    queimaEstoque:{
      field: 'proqueimaestoque',
      type: DataTypes.BOOLEAN,
      defaultValue: false
      
    },
    colecao:{
      field: 'procolecao',
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    emAlta:{
      field: 'proemalta',
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    ofertaEspecial:{
      field: 'proofertaEspecial',
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
},
{
  tableName: 'tbproduto',
  sequelize: connection,
  timestamps: false
});

ProdutoModel.belongsTo(MarcaModel,{
  foreignKey: "marca",
  as: "marca_id",
})

ProdutoModel.belongsTo(CategoriaModel,{
  foreignKey: "categoria",
  as: "categoria_id",
})

export default ProdutoModel;