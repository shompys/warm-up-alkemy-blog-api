import sequelize from '../../db';
import { Model, DataTypes} from 'sequelize';
import Categories from '../categories/categories.models';


const Posts = sequelize.define('Posts', {

    title: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING }

})

export default Posts;