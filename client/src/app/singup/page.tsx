"use client";

import Link from "next/link";
import Button from "../components/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react"

export default function SingUp() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassoword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3333/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });

      const data = await resposta.json();
      
      if(resposta.ok) {
        alert("Cadastro realizado com sucesso!");
        console.log(data);
      } else {
        alert("Erro ao cadastrar: " + data.message)
      }
    } catch(err){
      console.error("Erro ao cadastrar: ", err)
      alert("Erro inesperado.")
    }
  }

  return (
    <main className="bg-gradient-to-br from-[#fdf6f0] to-[#f0f4fd] bg-[url('/dots.svg')] bg-fixed bg-repeat text-gray-800 min-h-screen flex justify-center items-center">
      <motion.div
        className="max-w-md mx-auto bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4 w-[290px] sm:w-[350px]">
          <h1 className="text-4xl text-#F0F8FF">Cadastre-se</h1>

          <label htmlFor="name" className="flex items-center gap-2">
          <User size={20}/> <motion.input
              type="text"
              name="name"
              placeholder="NAME"
              onChange={(e) => setName(e.target.value)}
              className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </label>

          <label htmlFor="email" className="flex items-center gap-2">
            <Mail size={20} />
            <motion.input
              type="email"
              name="email"
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </label>
          <label htmlFor="password" className="flex items-center gap-2">
            <Lock size={20} />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassoword(e.target.value)}
              className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </label>

          <Button texto="Cadastrar" />

          <p>
            Já possui uma conta?
            <strong>
              <Link href="/login"> Faça login</Link>
            </strong>
          </p>
        </form>
      </motion.div>
    </main>
  );
}
