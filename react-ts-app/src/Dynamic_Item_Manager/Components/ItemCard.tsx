
interface item{
  id:number,
  name:string,
  desc:string,
}


function ItemCard({data}) {

  // console.log(data);

  return (
    <div>{data.name}</div>
  )
}

export default ItemCard;