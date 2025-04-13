
type BotaoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  texto: string;
}

export default function Button({texto, ...rest}: BotaoProps){
  return(
    <button className="bg-[#a3c8f5] w-[100%] hover:bg-[#f4a89e] text-white font-semibold py-2 px-4 rounded-xl transition">
      {texto}
  </button>
  )
}