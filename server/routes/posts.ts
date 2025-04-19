import express from 'express';
import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";


const prisma= new PrismaClient();
const router= express.Router();


router.get('/posts/', async(res:Response, req:Request)=>{
       try{
          const posts= await prisma.post.findMany();
          res.json(posts)
       } catch(err){
        res.status(500).json({err:"Erro GET na requisão dos Posts"})
        console.log(err)
       }

})
router.post('/posts/', async(res:Response,  req:Request)=>{
    const{ imagem, comment, autorId } = req.body;  
        try{
           const newPost= await prisma.post.create({
             data:{
                 imagem,
                 comment,
                 autor:{
                     connect:{id:autorId}
                } 
              },
            });
        res.status(201).json(newPost);
        res.send("OK");
        } catch(error) {
            res.status(500).json({error:"Um erro POST afetou a Postagem e a ação falhou"});
        }
      });

export default router;