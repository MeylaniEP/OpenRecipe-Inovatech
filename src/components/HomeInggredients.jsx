import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const HomeIngredients = ({ ingredients }) => {
  const navigate = useNavigate();

  const handleIngredientClick = (ingredient) => {
    navigate(`/videos-by-ingredient/${ingredient}`);
  };

  return (
    <div className="container-inggredients d-flex flex-column p-4 align-items-start fish-container">
      <h4 className="title-inggredients">Choose Recipe by Ingredients</h4>
      <div className="scrollable-container w-100">
        <div className="scrollable-ingredients d-flex flex-lg-wrap gap-2 justify-content-start align-items-center">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center border rounded ingredient-box"
              onClick={() => handleIngredientClick(ingredient.name)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="ingredient-image"
              />
              <label className="text-center">{ingredient.name}</label>
            </div>
          ))}
          <div className="d-flex flex-column align-items-center p-1 ingredient-box">
            <Nav.Link as={Link} to="/inggredients">
              More
            </Nav.Link>
          </div>
        </div>
      </div>
      <style>{`
        .ingredient-box {
          max-width: 65px;
          max-height: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 1);
          padding: 1em;
        }

        .ingredient-image {
          max-width: 70%;
          max-height: 70%;
          height: auto;
          width: auto;
          display: block;
        }

        .scrollable-container {
          overflow-x: auto;
          padding-bottom: 1em;
        }

        @media (max-width: 768px) {
          .container-inggredients {
            display: none;
          }
          .scrollable-ingredients {
            display: flex;
            overflow-x: auto;
            gap: 1em;
          }
          .scrollable-ingredients > * {
            flex: 0 0 auto;
          }
          .container-inggredients {
            background-color: transparent !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
          .ingredient-box {
            background-color: rgba(255, 255, 255, 1);
          }
          .title-inggredients {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeIngredients;
