import express from 'express';


import userRoutes from './routes/user';

const app= express();
const PORT = 3333;

app.use(express.json());
app.use('/api', userRoutes);

app.listen(PORT, ()=>{

    console.log(`No ar e rodando na porta ${PORT}!!`)

})

