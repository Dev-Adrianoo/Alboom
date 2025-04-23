"use client";

import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import Button from "@/app/components/button";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { ok } from "assert";
import { METHODS } from "http";

type Posts={
  id:number;
  comment:string;
  imagem:string;
}
type Users={
  id:number;
  name:string;
  email:string;
  password:number;
}
export default function HomePage() {

  const [user, setUser]= useState<Users[]>([]);
  const [imagem,setImagem]= useState<File | null>(null);
  const [comment, setComment]= useState<string>("");
  const [selectImage, setselectImage]= useState<string | undefined>(undefined);  
  const [post, setPost]= useState<Posts[]>([]);
  
  const fetchPosts= async ()=>{
    try{
    const res= await fetch("http://localhost:3333/api/posts/");
    const data= await res.json();
    if(!data || data.length=== 0){
        alert("escolha uma imagem")
        return;
    }else {
      setPost(data);
    }} catch(err){
      console.error("erro ao buscar a imagem com GET",err)
    };
  }
  const handlerChange = async(e: React.ChangeEvent<HTMLInputElement>)=>{
        
      const files= e.target.files;
      if (files && files.length > 0){
        setImagem(files[0]);
      }
    }
  const handlePost = async(e: React.FormEvent)=>{
    e.preventDefault();
    if(!imagem){
      alert("Por favor, escolha uma imagem");
      return;
    }
     try{
        const formData= new FormData();
        formData.append("imagem", imagem);
        formData.append("comment", comment);  
        const resPost = await fetch("http://localhost:3333/api/posts/",{
            method:"POST",
            body:formData,
          });
           const data = await resPost.json();
           console.log(data);
           await fetchPosts();
           
      } catch(err) {

        console.log("erro ao tentar fazer uma postagem:", err)
        alert("Erro ao fazer a Postagem")
      }
      
    }
   
    useEffect(()=>{
      
    
        fetchPosts();
    },[])

   useEffect(()=>{
    
    const fetchUsers= async()=>{
      const resposta= await fetch("http://localhost:3333/api/users");
      const dados= await resposta.json();
      if(!dados|| dados.length===0){
        alert("você não esta conectado a uma conta Alboom.Redirecionando a pagina principal...")
        window.location.href='./login/page.tsx'; 
      } else{
        alert("deu tudo certo");
        setUser(dados);
      }
      fetchUsers();
   }},[])
   
  return (
    <main>
      <header className="bg-white p-2 flex justify-between">
        <h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
          Alboom
        </h1>
        <ul className="flex space-x-5 items-center">
          <li className="flex gap-2 items-center hover:text-blue-500 transition-colors cursor-pointer">
            {" "}
            <User size={17} /> Perfil
          </li>
          
          <Link href="/login">
          <li className="flex gap-2 items-center hover:text-red-500 transition-colors cursor-pointer">
            {" "}
            <LogOut size={17} /> Sair
          </li>
          </Link>
        </ul>
      </header>
      <form onSubmit={handlePost}>
      <div className="bg-[url('/dots.svg')] bg-fixed bg-repeat text-gray-800 min-h-full flex justify-center flex-col items-center space-y-4">
        <h1 className="text-3xl font-semibold text-color-[#1E3A8A] my-5">
          Adicione uma nova Memória
        </h1>
        <div className="flex items-center justify-center flex-col space-y-7">
          <div className="flex items-center space-y-3 justify-center flex-col bg-white w-[380px] h-[500px] sm:w-[500px] sm:h-[480px]">
            <label
              htmlFor="foto"
              className="flex cursor-pointer space-y-3 justify-center items-center flex-col w-[50%] h-[300px] border-2 border-gray-300 border-dashed hover:border-blue-500 hover:border-dashed p-6 rounded-md transition-all duration-200 text-left"
            >
              {selectImage &&(
                <img
                  src={selectImage}
                  className="h-auto w-[100%]"
                />
              )}
              Arraste e solte sua imagem aqui ou clique para selecionar
              <input
                id="foto"
                type="file"
                accept=".png, .jpeg, .jpg"
                className="hidden"
                onChange={(e)=>{
                    handlerChange(e);
                    const file= e.target.files?.[0];
                    setselectImage(
                    file ? URL.createObjectURL(file):undefined 
                  );
                }}
                />
            </label>
            <div className="flex flex-col space-y-3">
              <textarea
                id="message"
                placeholder="Descreva o momento..."
                onChange={(e)=> setComment(e.target.value)}
                className="p-2"
              ></textarea>
              <Button texto="Salvar Memoria"
               type="submit"
              />

         
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Suas Memórias</h1>
            <div className="bg-white p-3 w-[350px]">
               {post.map((posts)=>(
                <div key={posts.id} className="bg-white border-solid border-blue-800 border-[0.5px] gap-10 justify-center items-center flex flex-col ">  
                  <img 
                   src={`data:image/png;base64,${posts.imagem}`}                 
                   className=" rounded-sm w-[100%] h-[200px] border-solid border-black border-2 "                   
                  />
                  <p className="h-24 w-[75%] text-left p-2 border-solid border-black border-[0.5px]">{posts.comment}</p>
                 </div>
               ))}
            </div>  
          </div>
        </div>
        <Footer />
      </div>
      </form>
    </main>
  );
}
