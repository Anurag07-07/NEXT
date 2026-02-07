export default async function Products({params}:{
  params:Promise<{productId:string}>
}){
  const {productId} = await params

  return <div>This is {productId} Page</div>
}