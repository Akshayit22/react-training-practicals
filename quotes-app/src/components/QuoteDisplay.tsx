const QuoteDisplay = ({ data }: any) => {
  const { quote, author } = data;

  return (
    <div>
      <p>{quote}</p>
      <p>- {author}</p>
    </div>
  );
};

export default QuoteDisplay;
