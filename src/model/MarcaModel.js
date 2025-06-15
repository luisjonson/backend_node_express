import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class MarcaModel extends Model { }


MarcaModel.init({
    numsequencial: {
        field: 'marnumsequencial',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        field: 'marnome',
        type: DataTypes.STRING(150),
        allowNull: false,
        unique:true
    },
    descricao: {
        field: 'mardescricao',
        type: DataTypes.STRING,
    },
    ativo: {
        field: 'marativo',
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tbmarca',
    sequelize: connection,
    timestamps: false
});

export default MarcaModel;