export const StockListItem = ({ stock }) => {
  const handleBuy = () => {
    //TODO:
  };

  return (
    <li className="flex w-full justify-between" key={stock.id}>
      <div className="">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <div>{"+ " + "1" + " -"}</div>
      <button className="" onClick={handleBuy}>
        Buy
      </button>
    </li>
  );
};
