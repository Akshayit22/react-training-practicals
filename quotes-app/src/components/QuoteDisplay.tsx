import React from "react";

const QuoteDisplay = ({ quote }: any) => {
  const { text, author } = quote;

  return (
    <div>
      <p>{text}</p>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteDisplay;
