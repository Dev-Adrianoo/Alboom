"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"


export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fdf6f0] to-[#f0f4fd] text-gray-800 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl shadow-xl max-w-lg"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl font-medium mb-2">Página não encontrada</p>
        <p className="mb-6 text-sm text-gray-600">
          Essa parte do Alboom parece ter se perdido no tempo...
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          < ArrowLeft size={20}/>
        </Link>
      </motion.div>
    </main>
  );
}
