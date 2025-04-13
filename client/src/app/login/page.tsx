"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../components/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react"
import  Footer  from "@/app/footer/page"

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassoword] = useState<string>("");

  return (
    <main className="bg-gradient-to-br from-[#e7f4fd] to-[#F0F8FF] bg-[url('/dots.svg')] bg-fixed bg-repeat text-gray-800 min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut"}}
        className="max-w-md mx-auto bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-xl"
      >
        <form className="flex flex-col justify-center items-center space-y-4 w-[290px] sm:w-[350px]">
          <h1 className="text-4xl text-#F0F8FF">Login</h1>

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
            <motion.input
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassoword(e.target.value)}
              className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </label>

          <Link href="/home">
          <Button texto="Entrar" className="items-end" />
          </Link>

          <p>
            Ainda não possui uma conta?
            <strong>
              <Link href="/singup"> Cadastre-se</Link>
            </strong>
          </p>
        </form>
      </motion.div>
    </main>
  );
}
