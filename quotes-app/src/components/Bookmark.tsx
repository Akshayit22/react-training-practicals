import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookmarkedQuote } from "./BookmarkedQuote";

interface Quote {
    author: string;
    id: number;
    quote: string;
}

const Bookmark = () => {

    const navigate = useNavigate();
    const bookmarks = useSelector((s:any) => s.bookmarks);
   
    return (
        <div>
            <div className="flex justify-start m-3 p-3">
                <button
                    onClick={() => navigate("/")}
                    className="flex gap-1  bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full"
                >
                    <FaArrowLeftLong className="text-2xl" />
                    Home
                </button>
                
            </div>

            <div>
                <p className="text-3xl font-semibold text-center">Saved Quotes</p>
            </div>

            <div>
                {
                    bookmarks.map((data:Quote,index:number)=>(
                            <BookmarkedQuote key={index} data={data}></BookmarkedQuote>
                    ))
                }
                
            </div>

        </div>
    )

}

export default Bookmark;