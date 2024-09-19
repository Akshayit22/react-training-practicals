
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

    // function handleAddItem(nextName: any,nextDesc: any) {
    //   dispatch({
    //     type: 'AddItem',
    //     id: nextId++,
    //     name: nextName,
    //     desc: nextDesc,
    //   });
    // }

    // function handleDeleteTask(taskId: any) {
    //   dispatch({
    //     type: 'deleted',
    //     id: taskId
    //   });
    // }