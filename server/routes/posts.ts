import express from 'express';
import multer from 'multer';
import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";


const prisma= new PrismaClient();
const router= express.Router();
const upload = multer();


router.get('/posts/', async( req:Request,res:Response)=>{
       try{
          const posts= await prisma.post.findMany();
          const postsformat= posts.map(post =>({
              id:post.id,
              comment:post.comment,
              imagem:Buffer.from(post.imagem).toString("base64"),
          })); 
          res.json(postsformat)
       } catch(err){
        res.status(500).json({err:"Erro GET na requisão dos Posts"})
        console.log(err)
       }

})
router.post('/posts/', upload.single("imagem"), async(req:Request, res:Response)=>{
        try{
          const imagem= req.file;
          const {comment}= req.body;  
      
          if (!imagem || !comment ){
            res.status(500).json({message:"Está faltando itens da requisição que são obrigatorios"})
          }
          const newPost= await prisma.post.create({
            data:{
                comment,
                imagem:imagem!.buffer,
             },
           });
         res.status(201).json(newPost);
         res.send("OK");
       } catch(error) {
           res.status(500).json({error:"Um erro POST afetou a Postagem e a ação falhou"});
       }
      
      });

//router.delete("/posts/",async(req:Request, res:Response)=>{})
export default router;