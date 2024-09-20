import { useContext, useEffect } from 'react';
// import useItemMngt from '../hooks/useItemMngt';
import ItemCard from './ItemCard';
import { AppContext } from '../Context/AppContext';


function ItemList() {

  const {items}:any = useContext(AppContext);

  return (
    <div className='flex flex-wrap justify-start'>
          {
            items.map((data:any,index:number)=>(
              <ItemCard key={index} data={data}/>)
            )
          }
    </div>
  )
}

export default ItemList