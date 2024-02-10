
import React, { useState } from "react";

function Header() {
  const [money, setMoney] = useState(1000);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]); 

  const handleIncrease = () => {
    if (price <= 0) {
      alert("the money cant be 0");
      return;
    }
    if (price > money) {
      alert("Not enough money");
      return;
    }

    const newMoney = money + price;
    setMoney(newMoney);
    setItems([...items, { description, price: `+${price} ${description}` }]); 
    setDescription("");
    setPrice(0);
  };

  const handleDecrease = () => {
    if (price > money) {
      alert("what? error 404");
      return;
    }

    const newMoney = money - price;
    setMoney(newMoney);
    setItems([...items, { description, price: `-${price} ${description}` }]);
    setDescription(""); 
    setPrice(0);
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    if ( value < 0) {
      return; 
    }
    setPrice(value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleIncrease(); 
    }
  };


  const renderedItems = items.map((item, index) => (
    <div key={index}>
      {item.price}
    </div>
  ));

  return (
    <div>
      <h1>Your money: {money}</h1>
      <button className="btn2" onClick={handleIncrease}>
        Add
      </button>
      <button className="btn1" onClick={handleDecrease}>
        Decrease
      </button>
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        onKeyDown={handleEnter}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        onKeyDown={handleEnter} 
      />
      <div><p className="items">{renderedItems}</p></div> 
    </div>
  );
}

export default Header;



