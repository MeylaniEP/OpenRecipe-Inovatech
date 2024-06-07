import { Link } from "react-router-dom";
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
    { name: "Water..", image: WaterMelon },
    { name: "Mango", image: Mango },
  ];
  return (
    <div
      className="container-inggredientsMenu d-flex flex-row justify-content-between"
      style={{ backgroundColor: "#FAF9F6", height: "100vh" }}
    >
      <div className="d-flex flex-row mx-5 mt-5 justify-content-between w-100">
        <div className="d-flex flex-column" style={{}}>
          <div>
            <div>
              <h2>Meat and Animal Product</h2>
            </div>
            <div className="d-flex felx-row">
              <div>
                <AnimalInggredient meatInggredients={meatIngredients} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Vegetables</h2>
            </div>
            <div className="d-flex felx-row">
              <div>
                <VegetablesInggredients
                  vegetableInggredients={vegetableInggredients}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>Fruits</h2>
            </div>
            <div className="d-flex felx-row">
              <div>
                <FruitInggredients fruitInggredients={fruitableInggredients} />
              </div>
            </div>
          </div>
        </div>
        <div className="ads-inggredients" style={{ width: "30%" }}>
          <Ads />
        </div>
      </div>
      <style>
        {`
         @media (max-width: 768px) {
        .ads-inggredients{
        display: none;
        }
        .container-inggredientsMenu{
        hight:100%;
        }
      }
        `}
      </style>
    </div>
  );
}

export default Inggredients;
