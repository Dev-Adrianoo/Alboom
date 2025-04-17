import express from 'express';

import { PrismaClient } from '@prisma/client';

const router= express.Router();
const prisma= new PrismaClient();

router.get('/users', async (req, res)=>{

        try{
        const users= await prisma.user.findMany();
         res.json(users);

        }catch(error){
                
        res.status(500).json({error:'Erro GET ao verificar usuarios'});
        console.error(error);

        }
});
router.post("/users", async (req , res)=>{
        try{
            
            const{name, email, password}= req.body;
            
            const newUser= await prisma.user.create({

                data:{
                    name,
                    email,
                    password,
                },
            });    
            res.status(201).json(newUser);
        }catch(error){

             res.status(500).json({error:"Erro POST ao tentar adicionar o usuario"})
             console.error(error);
        }
});

export default router;