const QuoteDisplay = ({ data }: any) => {
  const { quote, author } = data;

  return (
    <div className="flex flex-col space-y-5 m-3 max-w-[70%] dark:text-white">
      <p className="text-2xl font-bold">{quote}</p>
      <p className="text-xl">- {author}</p>
    </div>
  );
};

export default QuoteDisplay;
