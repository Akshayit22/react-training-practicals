import { useContext, useEffect, useRef, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
// import useItemMngt from "../hooks/useItemMngt";
import {AppContext} from "../Context/AppContext";

function Header() {

    // const {dispatch} = useItemMngt();
    const {dispatch} = useContext(AppContext);

    const [search,setSearch] = useState<string>("");
    const [addItem,setAddItem] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const HandleSubmit = (event:any) =>{
        event.preventDefault();
        console.log(search);
    }

    const HandleAddItems = (event:any)=>{
        event.preventDefault();
        const [name,desc] = [event.target[0].value,event.target[1].value];
        dispatch({type: 'AddItem',name:name,desc:desc});
    }

    useEffect(()=>{
        inputRef.current?.focus();
    },[])

    return (
        <div>
            <div className="bg-slate-800 flex justify-between items-center px-3 flex-col md:flex-row">
            {/* Add Items Button  */}
                <div className="flex bg-white text-black h-fit items-center rounded-md hover:cursor-pointer p-1" onClick={()=>setAddItem(!addItem)}>
                    <button className="mx-1 ">Add Items</button>
                    <IoAddCircleSharp className="text-2xl"/>
                </div>

                {/* Search Bar code */}
                <div className="flex justify-center items-center ">
                    <form onSubmit={(event)=>HandleSubmit(event)} className="flex">
                        <input type="text" ref={inputRef} onChange={(e) => setSearch(e.target.value)} className="bg-white h-8 w-40vw  text-black rounded-md p-2" placeholder="Enter to search items..."></input>
                        
                        <button type="submit"><FiSearch className="text-3xl hover:cursor-pointer" type="submit"/></button>
                    </form>
                </div>

                {/* Filter Code */}
                <div className="flex flex-col bg-white text-black w-fit items-center rounded-md p-1 text-center">

                    <p className="border-b-2 border-black">Filter</p>
                    <div >
                        <button className="m-1 px-1 hover:cursor-pointer  hover:bg-slate-700 rounded-md">Name</button>|
                        <button className="m-1 px-1 hover:cursor-pointer  hover:bg-slate-700 rounded-md">Desc</button>
                    </div>

                </div>
            </div>

            {
                addItem &&
                (
                    <div className="justify-center flex flex-wrap">
                        <div className="bg-slate-500 rounded-md">
                            <form onSubmit={()=>HandleAddItems(event)} className="flex text-black flex-col h-fit ml-2 space-y-2 p-1 flex-wrap">

                                <label htmlFor="name">Item Name :</label>
                                <textarea id="name" className="bg-white" placeholder="Item Name"></textarea>

                                <label htmlFor="desc">Item Description :</label>
                                <textarea id="desc" className="bg-white" placeholder="Item Description"></textarea>

                                <div className="flex justify-between">
                                    <button type="submit" className="p-2 hover:cursor-pointer bg-slate-700 w-fit rounded-md ">Add</button>
                                    <button className="p-2 hover:cursor-pointer bg-slate-700 w-fit rounded-md " onClick={()=>setAddItem(!addItem)}>Cancle</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }

        </div>
        
    )
}

export default Header;