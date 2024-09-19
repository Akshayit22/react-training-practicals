import useItemMngt from '../hooks/useItemMngt';
import ItemCard from './ItemCard';


function ItemList() {

  const {items} = useItemMngt();
  console.log(items);

  return (
    <div className="">
          {
            items.map((data:any,index:number)=>(
              <ItemCard key={index} data={data}/>)
            )
          }
    </div>
  )
}

export default ItemList