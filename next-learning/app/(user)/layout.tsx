import { ReactNode } from "react"

export default function Layout({children}:{
  children:ReactNode
}){
  return <div>
    <header className=" text-black font-bold text-5xl  w-full h-20 bg-cyan-300 flex justify-center-safe items-center-safe">Header</header>
    {children}
  </div>
}