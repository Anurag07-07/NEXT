'use client'

import { usePathname } from "next/navigation"

export default function NotFFound(){

  const path =  usePathname()
  const value = path.split("/")[1]
  return <div>This is 404 Not Found Page .Your path is {value}</div>

}