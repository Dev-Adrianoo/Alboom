"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import Button from "@/app/components/button";
import Footer from "@/app/footer/page";
import Link from "next/link";
import { ok } from "assert";

export default function HomePage() {
  const[imagem,setImagem]= useState<File | null>(null);
  const[comment, setComment]= useState<string>("");

  const handlerChange = async(e: React.ChangeEvent<HTMLInputElement>)=>{
        
      const files= e.target.files;
      if (files && files.length > 0){
        setImagem(files[0]);
      }
  } 
  const handlePost = async(e: React.FormEvent)=>{
    e.preventDefault();
     try{
        const resPost = await fetch("http://localhost:3333/api/posts/",{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            },
            body:JSON.stringify({imagem, comment}),
          });
           const data = await resPost.json();
           if(resPost.ok){
              alert("Postagem concluida!");
              console.log(data);
            } else{
              alert("Erro ao concluir a postagem:"+ data.message)
            }
      } catch(err) {

        console.log("erro ao tentar fazer uma postagem:", err)
        alert("Erro ao fazer a Postagem")
      }
    }
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
          </Link>Cannot destructure property 'imagem' of 'req.body' as it is undefined.
        </ul>
      </header>
      <form onSubmit={handlePost}>
      <div className="bg-[url('/dots.svg')] bg-fixed bg-repeCannot destructure property 'imagem' of 'req.body' as it is undefined.at text-gray-800 min-h-full flex justify-center flex-col items-center space-y-4">
        <h1 className="text-3xl font-semibold text-color-[#1E3A8A] my-5">
          Adicione uma nova Memória
        </h1>
        <div className="flex items-center justify-center flex-col space-y-7">
          <div className="flex items-center space-y-3 justify-center flex-col bg-white w-[380px] h-[500px] sm:w-[500px] sm:h-[480px]">
            <label
              htmlFor="foto"
              className="flex cursor-pointer space-y-3 justify-center items-center flex-col w-[50%] h-[300px] border-2 border-gray-300 border-dashed hover:border-blue-500 hover:border-dashed p-6 rounded-md transition-all duration-200 "
            >
              Arraste e solte sua imagem aqui ou clique para selecionar
             
              <input
                id="foto"
                type="file"
                accept=".png, .jpeg, .jpg"
                className="hidden"
                onChange={handlerChange}
                />
            </label>
            <div className="flex flex-col space-y-3">
              <textarea
                id="message"
                placeholder="Descreva o momento..."
                onChange={(e)=> setComment(e.target.value)}
              ></textarea>
              <Button texto="Salvar Memoria"
               type="submit"
              />

         
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold">Suas Memórias</h1>
            <div className="bg-white p-3 w-[350px]">
              FOTO
              <div>
                <p>Memorias...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </form>
    </main>
  );
}
