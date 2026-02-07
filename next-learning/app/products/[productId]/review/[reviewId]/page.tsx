export default async function Review({params}:{
  params:Promise<{productId:string,reviewId:string}>
}){
  const {productId,reviewId}  = await params

  return <div>This is {productId} Product and {reviewId} Review Page</div>
}