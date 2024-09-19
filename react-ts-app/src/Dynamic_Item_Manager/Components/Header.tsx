import { useEffect, useRef, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function Header() {

    const [search,setSearch] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const HandleSubmit = (event:any) =>{
        event.preventDefault();
        console.log(search);
    }

    useEffect(()=>{
        inputRef.current?.focus();
    },[])

    return (
        <div className="bg-slate-800 flex justify-between mx-3 flex-col md:flex-row">
            {/* Add Items Button  */}
            <div className="flex bg-white text-black w-fit items-center rounded-md hover:cursor-pointer p-1">
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
    )
}

export default Header;