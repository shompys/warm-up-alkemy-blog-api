import {Router} from 'express';
const router = Router();

import * as postsControllers from './posts.controllers';

router.get('/', postsControllers.getPosts);
router.post('/', postsControllers.createPosts);

router.get('/:id', postsControllers.getPostsById);
router.patch('/:id', postsControllers.updateUserById);
router.delete('/:id', postsControllers.deleteUserById);

export default router;