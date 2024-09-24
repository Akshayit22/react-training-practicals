import { useState } from "react";

export const StockListItem = ({ stock }) => {
  const handleBuy = () => {};

  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = (flag) => {
    if (!flag) {
      quantity < 2 ? null : setQuantity(quantity - 1);
    }
    if (flag) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <li className="flex w-full justify-between" key={stock.id}>
      <div className="w-[30%]">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <div className="flex gap-3">
        <button onClick={() => handleChangeQuantity(true)}>+</button>
        <p>{quantity}</p>
        <button onClick={() => handleChangeQuantity(false)}>-</button>
      </div>
      <button className="" onClick={handleBuy}>
        Buy
      </button>
    </li>
  );
};
