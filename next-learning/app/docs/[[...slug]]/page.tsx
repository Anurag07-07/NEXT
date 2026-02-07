import { notFound } from "next/navigation"

export default async function Docs({params}:{
  params:Promise<{slug:string[]}>
}){
  const {slug} = await params

  if (Number(slug?.length)>3) {
    notFound()
  }
  
  if (slug?.length===1) {
    return <div>This is something length 1</div>
  }

  if (slug?.length===2) {
    return <div>This is something length 2</div>
  }
  return <div>This is Docs Page</div>
}