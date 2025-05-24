import { DataTypes } from 'sequelize';
import connection from '../config/database.js';

const UserTypeModel = connection.define(    
    "tbtipousuario",
    {
        type:{
           type: DataTypes.STRING,
           allowNull: false
            
        } 
    },{
        tableName: 'tbusuario'
    }
);

// connection.sync({force:true});
export default UserTypeModel;