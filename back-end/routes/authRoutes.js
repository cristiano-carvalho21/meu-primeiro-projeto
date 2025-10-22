import express from 'express';
import { handleLogin, handleRegister} from '../controllers/authController.js';

const router = express.Router();

// Rota de cadastro
 router.post('/register', handleRegister);

 // Rota de login
  router.post('/login', handleLogin);

  //router.get('/me',authMiddleware);

 export default router;