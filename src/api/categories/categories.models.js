import sequelize from '../../db';
import { Model, DataTypes} from 'sequelize';
import Posts from '../posts/posts.models';

// class Categories extends Model {}
const Categories = sequelize.define('Categories', {

    category: {type: DataTypes.STRING}

});

// Categories.init({

//     category: { type: DataTypes.STRING}

// },
// {
// sequelize, modelName: 'categories'
// })

export default Categories;