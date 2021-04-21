import sequelize from '../../db'; //Probar si funciona sin importarlo aquí
import { Model, DataTypes} from 'sequelize';

class Posts extends Model {}
Posts.init({

    title: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING}

},
{
sequelize, modelName: 'posts'
})

export default Posts;