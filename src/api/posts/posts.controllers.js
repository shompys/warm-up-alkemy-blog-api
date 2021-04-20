import Posts from './posts.models';

export const createPosts = async (req, res, next) => {
    const {titulo, contenido, imagen, categoria, created_at} = req.body;

    // try{
    //     const post = await Posts.create({
    //         title: titulo,
    //         content: contenido,
    //         image: imagen,
    //         category: categoria
    //     })
    //     console.log(res)
    //     res.json(res)
    // }catch(err){
    //     console.log('estamos en catch --:' + err)
    // }
    
}
export const getPosts = async (req, res, next) => {
    // Posts.findAll()
    res.json('hola desde controllers getPosts')

}
export const getPostsById = async (req, res, next) => {
    
    res.json(`Hola desde getPostsById: ${req.params.id}`)

}
export const updateUserById = async (req, res, next) => {

    res.json('Hola desde updateuserById: ' + req.params.id);

}
export const deleteUserById = async (req, res, next) => {

    res.json('Hola desde deleteUserById: ' + req.params.id);

}
