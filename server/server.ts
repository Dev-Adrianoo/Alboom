import express from 'express';

import userRoutes from './routes/user';
<<<<<<< HEAD
=======
import router from './routes/user';
>>>>>>> f1a6b7c06a1772cfe3545f331e33a9d871011ddc

const app= express();
const PORT = 3333;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(3333, ()=>{

    console.log("No ar e rodando")
<<<<<<< HEAD

})
=======
})

export default router();
>>>>>>> f1a6b7c06a1772cfe3545f331e33a9d871011ddc
