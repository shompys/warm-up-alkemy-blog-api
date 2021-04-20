import { Router } from 'express';
const router = Router();

import routerPosts from '../api/posts/posts.routes';

router.use('/posts', routerPosts);

export default router;