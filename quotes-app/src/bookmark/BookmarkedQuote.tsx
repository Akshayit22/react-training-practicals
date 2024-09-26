import { useDispatch } from "react-redux";
import { TbXboxX } from "react-icons/tb";
import { removeFromBookmark } from "../redux/store";

export const BookmarkedQuote = ({ data }: any) => {

    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(removeFromBookmark(id));
    }

    return (
        <div className="flex justify-between border-black dark:border-white border-2 m-5 p-2 rounded-lg ">
            <div className="flex flex-col gap-2 m-2 p-2 dark:text-white">

                <p className="text-xl font-semibold">{data.quote}</p>
                <p className="font-semibold">-{data.author}</p>

            </div>
            <div className="flex justify-center text-3xl p-2 m-2 dark:text-white">

                <button onClick={() => handleRemove(data.id)}> <TbXboxX /></button>
                
            </div>
        </div>
    )
}
