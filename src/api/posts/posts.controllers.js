import Posts from './posts.models';

export const createPosts = async (req, res, next) => {

    const {titulo, contenido, imagen, categoria } = req.body;

    try{

        const postCreated = await Posts.create({
            title: titulo,
            content: contenido,
            image: imagen,
            category: categoria
        })
        
        res.status(200).json(postCreated)

    }catch(err){
        
        res.status(400).json({status: 400, msg: 'Error'});
        
    }
    
}
export const getPosts = async (req, res, next) => {

    try{

        const postsSearchs = await Posts.findAll({
            
            attributes:['id', 'title', 'image', 'category', 'createdAt'],
            order:[['createdAt', 'DESC']]
            
        })
        
        if (postsSearchs.length === 0) throw Error('The resources do not exist')

        res.status(200).json(postsSearchs)

    }catch(error){

        res.status(400).json({status: 400, msg: error.message})
        

    }
    
}
export const getPostsById = async (req, res, next) => {

    try{

        const postSearch = await Posts.findByPk(req.params.id)
        //generamos error null cuando no existe id
        if (postSearch === null) throw new Error('The resource does not exist')
        res.status(200).json(postSearch)

    }catch(error){

        res.status(404).json({status: 404, msg: error.message})

    }
    

}
export const updateUserById = async (req, res, next) => {

    const {titulo, contenido, imagen, categoria } = req.body;

    try{

        const postUpdated = await Posts.update({
            title: titulo,
            content: contenido,
            image: imagen,
            category: categoria
        },{
            where:{
                id: req.params.id
            }
        })

        if(postUpdated[0] === 0) throw new Error(`No changes were made or the resource does not exist`);
        res.status(200).json({status: 200, msg: 'Updated resource'});

    }catch(error){
        
        res.status(400).json({status: 400, msg: error.message})
        
    }
    

}
export const deleteUserById = async (req, res, next) => {

    try{

        const postDeleted = await Posts.destroy({
            where: {
                id: req.params.id
            }
        })

        if(postDeleted === 0 ) throw Error('The resource does not exist')
        
        res.status(200).json({status:200, msg: 'Resource deleted'})

    }catch(error){
        
        res.status(400).json({status: 400, msg: error.message})
    }

}
