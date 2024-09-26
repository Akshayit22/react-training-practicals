import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BookmarkedQuote } from "./BookmarkedQuote";
import Button from "../common/Button";

interface Quote {
    author: string;
    id: number;
    quote: string;
}

const Bookmark = () => {

    const navigate = useNavigate();
    const bookmarks = useSelector((s:any) => s.bookmarks);
   
    return (
        <div className="min-h-screen">
            <div className="flex justify-start mx-3 mb-3 p-3">
                
                <Button onclick={() => navigate("/")} text={"Home"} styles={""} Component={FaArrowLeftLong} />

            </div>

            <div>
                <p className="text-3xl font-semibold text-center dark:text-white">Saved Quotes</p>
            </div>

            <div>
                {
                    bookmarks.length === 0 ? (<div className="p-5 text-2xl text-back dark:text-white">Nothing is saved...</div>):
                    bookmarks.map((data:Quote,index:number)=>(
                            <BookmarkedQuote key={index} data={data}></BookmarkedQuote>
                    ))
                }
                
            </div>

        </div>
    )

}

export default Bookmark;