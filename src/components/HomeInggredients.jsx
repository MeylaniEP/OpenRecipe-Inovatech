import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeInggredients = ({ ingredients }) => {
  return (
    <div
      className="d-flex flex-column p-4 align-items-start fish-container"
      style={{
        color: "black",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "10px",
        boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
        marginTop: "1.5em",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <h4 style={{ width: "55%" }}>Choose Recipe by Ingredients</h4>
      <div className="d-flex flex-wrap gap-2 justify-content-start align-items-center w-100 my-3">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="d-flex flex-column align-items-center border rounded ingredient-box">
            <img src={ingredient.image} alt={ingredient.name} className="fish-image" />
            <label className="text-center" htmlFor={ingredient.name}>
              {ingredient.name}
            </label>
          </div>
        ))}
        <div className="d-flex flex-column align-items-center p-1 ingredient-box">
          <Nav.Link as={Link} to="/inggredients">More</Nav.Link>
        </div>
      </div>
      <style>{`
      .fish-container {
        color: black;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 10px;
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
        margin-top: 1.5em;
        width: 90%;
        overflow: hidden;
      }
      
      .ingredient-box {
        max-width: 65px;
        max-height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1em;
      }

      .fish-image {
        max-width: 70%;
        max-height: 70%;
        height: auto;
        width: auto;
        display: block;
      }
      `}</style>
    </div>
  );
};

export default HomeInggredients;
