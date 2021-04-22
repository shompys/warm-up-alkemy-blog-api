import sequelize from '../../db';
import { Model, DataTypes} from 'sequelize';
import Categories from '../categories/categories.models';

// class Posts extends Model {}
const Posts = sequelize.define('Posts', {

    title: { type: DataTypes.STRING },
    content: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING }

})

// Posts.init({

//     title: { type: DataTypes.STRING },
//     content: { type: DataTypes.TEXT },
//     image: { type: DataTypes.STRING }
//     // category: { type: DataTypes.STRING}

// },
// {
// sequelize, modelName: 'posts'
// })

export default Posts;