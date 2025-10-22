 import express from 'express';
 import path from 'path';
 import posts from './routes/posts.js';
 import logger from './componentes/logger.js';
 import errorHandler from './componentes/error.js';
 import notFound from './componentes/notFound.js';
 import cors from 'cors';
  
 const PORT = process.env.PORT || 8000;
 const app = express();

 // Dados do body
 app.use(cors());
 app.use(express.json());

 // Logger
 app.use(logger);

 // Rotas
 app.use('/api/posts',posts);

// Error Handler
app.use(notFound);
app.use(errorHandler); 

 app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))