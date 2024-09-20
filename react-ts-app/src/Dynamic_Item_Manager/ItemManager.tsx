
import Header from './Components/Header';
import ItemList from './Components/ItemList';


export default function ItemManager() {

  return (
   <div className='m-2 space-y-2'>
        <h2 className='text-center text-2xl justify-center'>Dynamic Items Manager</h2>
      
        <Header/>

        <ItemList/>
    </div>
  );
}