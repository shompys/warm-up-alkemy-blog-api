import Posts from './api/posts/posts.models'
import Categories from './api/categories/categories.models';

//
Categories.hasMany(Posts);
Posts.belongsTo(Categories);