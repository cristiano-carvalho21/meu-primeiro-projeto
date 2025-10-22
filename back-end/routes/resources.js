import express from 'express';
import { getLivros, getLivrosById,getLivrosByIdOne, getLivrosByIdThree, getLivrosByIdTwo, postlivros, putLivrosById, deleteLivrosById} from '../controllers/controllerResources.js';

const router = express.Router();



// Captura de todos os livros da api/livros
 router.get('/', getLivros);

 // Captura dos livros da api/livros através do id 1
  router.get('/classe/1', getLivrosByIdOne);

// Captura dos livros da api/livros através do id 2
  router.get('/classe/2', getLivrosByIdTwo);

// Captura dos livros da api/livros através do id 3
  router.get('/classe/3', getLivrosByIdThree);

  // Captura dos livros pelo id
 router.get('/:id', getLivrosById);

 //Create livros
 router.post('/cadastro', postlivros);

 router.put('/:id',putLivrosById);

 router.delete('/:id',deleteLivrosById);
 export default router;