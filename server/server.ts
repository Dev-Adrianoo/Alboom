import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';

const app= express();
const PORT = 3333;

app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use('/api', userRoutes);

app.listen(PORT, ()=>{

    console.log(`No ar e rodando na porta ${PORT}!!`)

})

