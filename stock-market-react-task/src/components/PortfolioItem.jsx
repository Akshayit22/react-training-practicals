export const PortfolioItem = ({ stock }) => {
  const handleSell = () => {
    //TODO:
  };

  return (
    <li className="flex justify-between" key={stock.id}>
      <div className="">
        <span>{stock.name}</span>
        <span>( {stock.quantity} )</span>
      </div>
      <div>{(stock.quantity * stock.price).toFixed(2)}</div>
      <button className="" onClick={handleSell}>
        Sell
      </button>
    </li>
  );
};
