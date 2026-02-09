'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Page(){
  const navLinks = [
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"ForgotPassword",href:"/forget-password"}
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