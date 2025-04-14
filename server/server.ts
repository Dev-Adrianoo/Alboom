import express from 'express';

import userRoutes from './routes/user';

const app= express();
const PORT = 3333;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(3333, ()=>{

    console.log("No ar e rodando")

})

