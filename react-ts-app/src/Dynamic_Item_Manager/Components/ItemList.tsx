import { useContext } from 'react';
// import useItemMngt from '../hooks/useItemMngt';
import ItemCard from './ItemCard';
import { AppContext } from '../Context/AppContext';


function ItemList() {

  const {items,sorted}:any = useContext(AppContext);

  return (
    <div className='flex flex-wrap justify-start'>
          {
            items.map((data:any)=>(
              <ItemCard key={data.id} data={data}/>)
            )
          }
    </div>
  )
}

export default ItemList