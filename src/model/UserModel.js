import { DataTypes, Model } from "sequelize";
import connection from "../config/connection.js";

class UserModel extends Model { }


UserModel.init({
    numsequencial: {
        field: 'usenumsequencial',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    tableName: 'tbuser',
    sequelize: connection,
    timestamps: false
});

export default UserModel;