import QuoteDisplay from "./QuoteDisplay";

import { RiFileCopyLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CiRepeat } from "react-icons/ci";
import { useGetRandomQuote } from "../api/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookmarkQuote } from "../redux/store";
import { useState } from "react";

const QuoteGenerator = () => {

    const navigate = useNavigate();

    const { isPending, error, data } = useGetRandomQuote();
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
    const [saved,setSaved] = useState(0);
    // console.log(data);

    if (isPending)
        return (
            <div className="flex text-2xl h-screen justify-center items-center">
                "Loading..."
            </div>
        );

    if (error) return "An error has occurred: " + error.message;

    const generateRandomQuote = () => {
        queryClient.invalidateQueries({ queryKey: ["RandomQuote"] });
    };

    const copyToClipboard = () => {
        const quoteText = `${data.quote}`;
        navigator.clipboard.writeText(quoteText);
    };

    const handleBookmark = (data:any) =>{
        setSaved(data.id);
        dispatch(bookmarkQuote(data));
    }

    return (
      <div className="h-screen">
        <div className="flex justify-end items-end m-3 p-3">
          <button
            onClick={() => navigate("/bookmark")}
            className="flex gap-1  bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full"
          >
            Bookmarks
            <FaArrowRightLong className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-3xl font-semibold text-center my-10">
            Random Quote Generator
          </h1>

          <div className="flex gap-4 justify-center">
            <FaQuoteLeft className="text-3xl mb-5" />
            <QuoteDisplay data={data} />
            <FaQuoteRight className="text-3xl mb-5" />
          </div>

          <div className="flex justify-evenly">
            <button
              onClick={copyToClipboard}
              className="flex gap-1 bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full"
            >
              <RiFileCopyLine className="text-xl mt-1" /> Copy
            </button>

            {
                saved === data.id ? 
                    (<></>):
                    (
                                <button
                                    onClick={() => handleBookmark(data)}
                                    className="flex gap-1  bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full"
                                >
                                    Bookmark
                                    <CiBookmark className="text-2xl" />
                                </button>
                    )
            }

            <button
              onClick={generateRandomQuote}
              className="flex gap-1  bg-black text-white p-3 hover:bg-white hover:text-black transition-transform duration-1000 cursor-pointer rounded-full"
            >
              Generate Quote
              <CiRepeat className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default QuoteGenerator;
