import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {AppContext} from "../Context/AppContext";


function ItemCard({data}:any) {

  const {dispatch} = useContext(AppContext);

  const HandleDeleteItem = (ID:number) => {
    const choice = confirm("Are you sure ???");
    if (choice) {
      dispatch({type:'RemoveItem',id:ID});
    }
  }

  return (
    <div className='flex flex-col p-2 m-2 border-white border rounded-md w-[80vw] md:w-[30vw] space-y-1'>
        <div className="flex justify-end">
          <FaEdit className="text-2xl m-2 hover:cursor-pointer"/>
          <MdDelete className="text-2xl m-2 hover:cursor-pointer" onClick={()=>HandleDeleteItem(data.id)}/>
        </div>

        <div>
          <p className="text-2xl">{data.name}</p>
          <p>{data.desc}</p>
        </div>

    </div>
  )
}

export default ItemCard;