import { useState } from "react";
import getRandomQuote from "../data/quotes";
import QuoteDisplay from "./QuoteDisplay";

import { RiFileCopyLine } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  console.log(quote);

  const generateRandomQuote = () => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
  };

  const Button = ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  );

  const copyToClipboard = () => {
    const quoteText = `${quote.text}`;
    navigator.clipboard.writeText(quoteText);
  };

  return (
    <div>
      <div>
        <h1>Random Quote Generator</h1>

        <div>
          <FaQuoteLeft />
          <QuoteDisplay quote={quote} />
          <FaQuoteRight />
        </div>

        <div>
          <button onClick={copyToClipboard}>
            <RiFileCopyLine /> Copy
          </button>

          <Button onClick={generateRandomQuote}>Generate Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
