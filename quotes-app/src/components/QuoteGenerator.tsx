import QuoteDisplay from "./QuoteDisplay";

import { RiFileCopyLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useGetRandomQuote } from "../api/react-query";
import { useQueryClient } from "@tanstack/react-query";

const QuoteGenerator = () => {

    const { isPending, error, data  } = useGetRandomQuote();
    const queryClient = useQueryClient();
    console.log(data);
  
    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


  const generateRandomQuote = () => {
    queryClient.invalidateQueries({ queryKey: ["RandomQuote"] });
  };

  const copyToClipboard = () => {
    const quoteText = `${data.quote}`;
    navigator.clipboard.writeText(quoteText);
  };

  return (
    <div>
      <div>
        <h1>Random Quote Generator</h1>

        <div>
          <FaQuoteLeft />
          <QuoteDisplay data={data} />
          <FaQuoteRight />
        </div>

        <div>
          <button onClick={copyToClipboard}>
            <RiFileCopyLine /> Copy
          </button>

          <button onClick={generateRandomQuote}>Generate Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
