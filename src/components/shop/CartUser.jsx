import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

function CartUser() {
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);
  const pricePerItem = 50000;

  const handleAdd = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleRemove = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const totalPrice = quantities.reduce(
    (total, quantity, index) => total + quantity * pricePerItem,
    0
  );

  const spices = ["Cinnamon", "Turmeric", "Ginger", "Cardamom"];

  return (
    <div>
      <div className="card" style={{ maxWidth: "25em", margin:"auto" }}>
        <div className="card-body d-flex flex-column">
          <h3 className="mb-4">Your Cart</h3>
          {quantities.map((quantity, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-start gap-4"
            >
              <div className="d-flex flex-row align-items-start">
                <p className="p-0 m-0">{spices[index]}:</p>
              </div>
              <div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn border"
                    onClick={() => handleRemove(index)}
                  >
                    <HiMinus />
                  </button>
                  <p className="m-0 p-2">{quantity}</p>
                  <button
                    type="button"
                    className="btn border"
                    onClick={() => handleAdd(index)}
                  >
                    <GoPlus />
                  </button>
                </div>
                <div>
                  <p>Rp {(quantity * pricePerItem).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
          <hr />
          <p className="fw-bold">Cost Total: Rp {totalPrice.toLocaleString()}</p>

          <div className="d-flex flex-row justify-content-center align-items-center text-light rounded" style={{backgroundColor:"rgba(42, 122, 178, 1)"}}>
            <h4>Buy</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
