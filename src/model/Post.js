import  DataTypes from 'sequelize';
import  sequelize from '../config/database';

// Definindo o modelo Post
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

export default Post;