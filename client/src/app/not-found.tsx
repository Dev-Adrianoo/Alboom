import Link from "next/link"


export default function NotFound(){
  return(
    <main className="bg-white h-screen flex justify-center items-center flex-col space-y-4">
      <h1 className="text-black flex justify-center items-center text-4xl text-justify">Ops, essa pagina não existe</h1>
      <h2 className="text-red-500 text-3xl">404</h2>
      <hr />
      <Link href="/" className="text-black text-2xl">Home</Link>
    </main>
  )
}