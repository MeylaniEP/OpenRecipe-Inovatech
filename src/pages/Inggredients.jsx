import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AnimalInggredient from "../components/menuInggredients/AnimalInggredient";
import Fish from "../assets/animal/fish.png";
import Egg from "../assets/animal/egg.png";
import Meat from "../assets/animal/meat.png";
import Chicken from "../assets/animal/chicken.png";
import Milk from "../assets/animal/milk.png";
import Skin from "../assets/animal/skin.png";
import Gut from "../assets/animal/gut.png";
import Potato from "../assets/vegetable/potato.png";
import Spinach from "../assets/vegetable/spinach.png";
import Broccoli from "../assets/vegetable/broccoli.png";
import Cabbage from "../assets/vegetable/cabbage.png";
import Celery from "../assets/vegetable/celery.png";
import VegetablesInggredients from "../components/menuInggredients/VegetablesInggredients";
import Carrot from "../assets/vegetable/carrots.png";
import Avocado from "../assets/fruit/avocado.png";
import Apple from "../assets/fruit/apple.png";
import Banana from "../assets/fruit/banana.png";
import Orange from "../assets/fruit/orange.png";
import WaterMelon from "../assets/fruit/waterMelon.png";
import Mango from "../assets/fruit/mango.png";
import FruitInggredients from "../components/menuInggredients/FruitInggredients";
import Ads from "../components/Ads";

function Inggredients() {
  const navigate = useNavigate();

  const meatIngredients = [
    { name: "Fish", image: Fish },
    { name: "Egg", image: Egg },
    { name: "Meat", image: Meat },
    { name: "Chicken", image: Chicken },
    { name: "Milk", image: Milk },
    { name: "Skin", image: Skin },
    { name: "Gut", image: Gut },
  ];

  const vegetableInggredients = [
    { name: "Potato", image: Potato },
    { name: "Spinach", image: Spinach },
    { name: "Broccoli", image: Broccoli },
    { name: "Carrot", image: Carrot },
    { name: "Cabbage", image: Cabbage },
    { name: "Celery", image: Celery },
  ];

  const fruitableInggredients = [
    { name: "Avocado", image: Avocado },
    { name: "Apple", image: Apple },
    { name: "Banana", image: Banana },
    { name: "Orange", image: Orange },
    { name: "WaterMelon", image: WaterMelon },
    { name: "Mango", image: Mango },
  ];

  const handleIngredientClick = (ingredient) => {
    navigate(`/videos-by-ingredient/${ingredient}`);
  };

  const renderIngredients = (ingredients) => {
    if (!ingredients) {
      return null;
    }

    return (
      <div className="scrollable-ingredients d-flex flex-lg-wrap gap-2 justify-content-start align-items-center">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center border rounded ingredient-box"
            onClick={() => handleIngredientClick(ingredient.name)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className="ingredient-image"
            />
            <label className="text-center">{ingredient.name}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="container-inggredientsMenu d-flex flex-row justify-content-between align-items-start p-4 mt-4"
      style={{ backgroundColor: "#FAF9F6", height: "100vh" }}
    >
     
      <div>
        <h1 className="title-inggredients mb-4">Choose Recipe by Ingredients</h1>
        <div className="scrollable-container w-100">
          <h2>Meat and Animal Products</h2>
          {renderIngredients(meatIngredients)}
        </div>
        <div className="scrollable-container w-100">
          <h2>Vegetables</h2>
          {renderIngredients(vegetableInggredients)}
        </div>
        <div className="scrollable-container w-100">
          <h2>Fruits</h2>
          {renderIngredients(fruitableInggredients)}
        </div>
      </div>
      <div className="ads-inggredients mb-4" style={{ width: "30%" }}>
        <Ads />
      </div>
      <style>{`
        .ingredient-box {
          max-width: 65px;
          max-height: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          .container-inggredientsMenu {
            padding: 1em;
          }
          .scrollable-ingredients {
            display: flex;
            overflow-x: auto;
            gap: 1em;
          }
          .scrollable-ingredients > * {
            flex: 0 0 auto;
          }
          .container-inggredientsMenu {
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
}

export default Inggredients;
