// import { Metadata } from "next"
// import { ReactNode } from "react"

// // export const metadata ={
// //   title:{
// //     default:"Deafult Title",
// //     templete:`%s Title Format`,
// //     absolute:"To override the parent segment title" 
// //   },
// //   description:"Desc about page"
// // }

// interface Props{
//   params:Promise<{productId:string}>
// }

// export const generateMetadata = async({params}:Props):Promise<Metadata>=>{
//   const {productId} = await params

//   const tit = new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(`Product ${productId}`)
//     },200)
//   })

//   return{
//     title:`IPhone ${tit}`
//   }
// }



// export default function Layout({children}:{
//   children:ReactNode
// }){
//   return <div>
//     <header className=" text-black font-bold text-5xl  w-full h-20 bg-cyan-300 flex justify-center-safe items-center-safe">Header</header>
//     {children}
//   </div>
// }


'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Page(){
  const navLinks = [
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"ForgotPassword",href:"/forgot-password"}
  ]

  const pathname  = usePathname()
  
  return <div>
    <div>
      {
        navLinks.map((link)=>{
          const isActive =  (pathname === link.href)  && (pathname.startsWith(link.href) || pathname!=='/' )

          return <div key={link.name} className=" flex">
            <Link  className={`${isActive ? " font-bold text-blue-600":" text-gray-500 font-extralight"}`} href={link.href}>{link.name}</Link>
          </div>
        })
      }
    </div>
  </div>
}