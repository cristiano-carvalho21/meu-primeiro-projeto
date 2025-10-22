import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/controllerPost.js';

const router = express.Router();



// Captura de todos os usuários da api/posts
 router.get('/', getPosts);

 // Captura dos usuários da api/posts através do seu número de processo
  router.get('/:nProcesso', getPost);

 // Create Post
 router.post('/',createPost)

// Update Post
  router.put('/:nProcesso', updatePost);

 // Delete Post
 router.delete('/:nProcesso', deletePost);

 export default router;