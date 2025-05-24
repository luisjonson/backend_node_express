import { DataTypes, Model } from "sequelize";
import connection from "../config/database.js";

class UsuarioModel extends Model {}


UsuarioModel.init({
    
    nome: {
        field: 'usenome',
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        field: 'useemail',
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        field: 'usesenha',
        type: DataTypes.STRING,
        allowNull: false
    },
    termo: {
        field: 'usetermo',
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    ativo: {
        field: 'useativo',
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    tableName: 'tbusuario',
    sequelize: connection,
});

export default UsuarioModel;