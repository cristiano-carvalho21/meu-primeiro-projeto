import express from 'express';
import { getLivros, getLivrosById,postlivros, putLivrosById, deleteLivrosById} from '../controllers/controllerResources.js';

const router = express.Router();



// Captura de todos os livros da api/livros
 router.get('/', getLivros);

  // Captura dos livros pelo id
 router.get('/:id', getLivrosById);

 //Create livros
 router.post('/cadastro', postlivros);

 router.put('/:id',putLivrosById);

 router.delete('/:id',deleteLivrosById);
 export default router;