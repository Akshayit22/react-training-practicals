import QuoteDisplay from "./QuoteDisplay";
import { RiFileCopyLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { CiRepeat } from "react-icons/ci";
import { useQuery } from "@tanstack/react-query";
import { CiBookmark } from "react-icons/ci";
import { IoIosBookmarks } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookmarkQuote } from "../redux/store";
import { useState } from "react";
import Button from "../common/Button";
import WrapperComponent from "../hoc/WrapperComponent";

const _QuoteGenerator = ({ data }: any) => {

    // const { isPending, error, data } = useGetRandomQuote();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [saved, setSaved] = useState(0);

    const { refetch } = useQuery({ queryKey: ["RandomQuote"] })

    const generateRandomQuote = () => {
        refetch();
    };

    const copyToClipboard = () => {
        const quoteText = `${data.quote}`;
        navigator.clipboard.writeText(quoteText);
    };

    const handleBookmark = (data: any) => {
        setSaved(data.id);
        dispatch(bookmarkQuote(data));
    }

    return (
        <div className="h-screen ">
            <div className="flex justify-end items-end mx-3 mb-3 p-3">
                <Button onclick={() => navigate("/bookmark")} text={"Bookmarks"} styles={""} Component={IoIosBookmarks} />
            </div>

            <div className="flex flex-col gap-4 justify-center dark:text-white">
                <h1 className="text-3xl font-semibold text-center my-10">
                    Random Quote Generator
                </h1>

                <div className="flex gap-4 justify-center dark:text-white">
                    <FaQuoteLeft className="text-3xl mb-5" />
                    <QuoteDisplay data={data} />
                    <FaQuoteRight className="text-3xl mb-5" />
                </div>

                <div className="flex justify-evenly">

                    <Button onclick={copyToClipboard} text={"Copy"} styles={""} Component={RiFileCopyLine} />
                    {
                        saved === data.id ? (<></>) :
                            (<Button onclick={() => handleBookmark(data)} text={"Bookmark"} styles={""} Component={CiBookmark} />)
                    }
                    <Button onclick={generateRandomQuote} text={"Generate Quote"} styles={""} Component={CiRepeat} />

                </div>
            </div>
        </div>
    );
};
export const QuoteGenerator = WrapperComponent(_QuoteGenerator);