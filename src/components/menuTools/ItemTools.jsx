import React from "react";

const ItemTools = ({ itemCooks }) => {
  return (
    <div>
      <div className="container-tool d-flex flex-wrap gap-3 justify-content-start align-items-center w-100 my-3">
        {itemCooks.map((itemCook, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center border rounded p-2"
            style={{
              minWidth: "80px",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "0px 0px 1rem 1rem",
              boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
            }}
          >
            <img
              src={itemCook.image}
              alt={itemCook.name}
              className="tool-image img-fluid"
              style={{ maxWidth: "30px" }}
            />
            <label className="text-center" htmlFor={itemCook.name}>
              {itemCook.name}
            </label>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ItemTools;