import React from "react";
import { IoIosSearch } from "react-icons/io";
import Fish from "../assets/animal/fish.png";
import Egg from "../assets/animal/egg.png";
import Meat from "../assets/animal/meat.png";
import Chicken from "../assets/animal/chicken.png";
import Potato from "../assets/vegetable/potato.png";
import Spinach from "../assets/vegetable/spinach.png";
import Celery from "../assets/vegetable/celery.png";
import Banana from "../assets/fruit/banana.png";
import Milk from "../assets/animal/milk.png";
import Avocado from "../assets/fruit/avocado.png";
import Carrot from "../assets/vegetable/carrots.png";
import CountryDropdown from "../components/CountryDropdown";
import HomeInggredients from "../components/HomeInggredients";
import More from "../assets/More.png";
import FoodVariant from "../components/FoodVariant";
import ListFoodVarian from "../components/ListFoodVarian";
import FilterFoodVarian from "../components/FilterFoodVarian";
import ListFood from "../components/ListFood";

const ingredients = [
  { name: "Fish", image: Fish },
  { name: "Egg", image: Egg },
  { name: "Meat", image: Meat },
  { name: "Chicken", image: Chicken },
  { name: "Potato", image: Potato },
  { name: "Spinach", image: Spinach },
  { name: "Celery", image: Celery },
  { name: "Banana", image: Banana },
  { name: "Milk", image: Milk },
  { name: "Avocado", image: Avocado },
  { name: "Carrot", image:  },
];

function Home() {
  return (
    <div
      className="d-flex flex-column"
      style={{ backgroundColor: "#FAF9F6", height: "100%" }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{ height: "100%" }}
      >
        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "95%", height: "35%", marginTop: "2em" }}
        >
          <div className="d-flex flex-column" style={{ width: "45%" }}>
            <div>
              <h1>What Would You Like To Cook Today ?</h1>
            </div>
            <div
              className="d-flex flex-row align-items-center"
              style={{
                color: "rgba(42, 122, 178, 1)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "10px",
                boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
                marginTop: "1.5em",
                height: "3.63rem",
              }}
            >
              <div className="d-flex flex-row mx-4 gap-4">
                <IoIosSearch className="fs-3" />
                <p className="p-0 m-0">Search any recipes</p>
              </div>
            </div>
            <div className="mt-4" style={{ width: "30%" }}>
              <label htmlFor="">Choose Country</label>
              <CountryDropdown />
            </div>
          </div>

          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{ width: "45%", height: "100%" }}
          >
            <HomeInggredients ingredients={ingredients} />
          </div>
        </div>

        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ width: "95%", marginTop: "1em" }}
        >
          <div className="d-flex flex-column" style={{ width: "75%" }}>
            <div>
              <div>
                <FoodVariant />
              </div>
              <div>
                <ListFoodVarian />
              </div>
            </div>
            <div>
              <div>
                <FilterFoodVarian />
              </div>
              <div>
                <ListFood />
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center "
            style={{ width: "25%", height: "" }}
          >
            <div
              className="d-flex flex-row justify-content-center align-items-center mb-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "1rem 1rem 1rem 1rem",
                boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
                width: "100%",
                minHeight: "500px",
              }}
            >
              ads
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
