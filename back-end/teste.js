import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import resources from "./routes/resources.js";


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


 // Rotas
 app.use('/api/livros',resources);
 app.use('/api',authRoutes);
 
app.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`)
});

