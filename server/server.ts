import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user';
import postsRoutes from './routes/posts'

const app= express();
const PORT = 3333;

app.use(cors({
    origin:'*',
}));
const corsConfig= {
    origin:'*',
    methods:['GET','POST'],
    allowedheaders:['Content-Type', 'Authorization'],
}
app.use(express.json());
app.use(express.urlencoded({extended:true }))
app.use('/api', userRoutes);
app.use('/api/posts/', (req, res)=>{
        console.log(req.body)
        res.send("tudo certo")

});

app.listen(PORT, ()=>{

    console.log(`No ar e rodando na porta ${PORT}!!`)

})

