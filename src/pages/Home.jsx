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
  { name: "Carrot", image: Carrot },
];

function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="left">
            <div className="title">
              <h1>What Would You Like To Cook Today?</h1>
            </div>
            <div className="search-bar">
              <div className="search-content">
                <IoIosSearch className="fs-3" />
                <p className="p-0 m-0">Search any recipes</p>
              </div>
            </div>
            <div className="country-dropdown">
              <label htmlFor="">Choose Country</label>
              <CountryDropdown />
            </div>
          </div>
          <div className="right">
            <HomeInggredients ingredients={ingredients} />
          </div>
        </div>
        <div className="main">
          <div className="main-left">
            <div className="scrollable-videos">
              <FoodVariant />
            </div>
            <div className="scrollable-videos">
              <ListFoodVarian />
            </div>
            <div className="scrollable-videos">
              <FilterFoodVarian />
            </div>
            <div className="scrollable-videos">
              <ListFood />
            </div>
          </div>
          <div className="main-right">
            <div className="ads">ads</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          background-color: #faf9f6;
          height: 100%;
        }
        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          height: 35%;
          margin-top: 2em;
          flex-wrap: wrap;
        }
        .left,
        .right {
          width: 45%;
        }
        .left {
          display: flex;
          flex-direction: column;
        }
        .title {
          display: block;
        }
        .search-bar {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: rgba(42, 122, 178, 1);
          background-color: rgba(255, 255, 255, 1);
          border-radius: 10px;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
          margin-top: 1.5em;
          height: 3.63rem;
        }
        .search-content {
          display: flex;
          flex-direction: row;
          margin-left: 1em;
          gap: 1em;
        }
        .country-dropdown {
          margin-top: 1em;
          width: 30%;
        }
        .main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          margin-top: 1em;
          flex-wrap: wrap;
        }
        .main-left {
          width: 75%;
          display: flex;
          flex-direction: column;
        }
        .main-right {
          width: 25%;
        }
        .ads {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 1);
          border-radius: 1rem;
          box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
          width: 100%;
          min-height: 500px;
          margin-bottom: 2em;
        }

        @media (max-width: 768px) {
          .scrollable-videos {
            display: flex;
            overflow-x: auto;
            gap: 1em;
            padding-bottom: 1em;
          }
          .scrollable-videos > * {
            flex: 0 0 auto;
          }
          .header {
            flex-direction: column;
            align-items: center;
          }
          .left,
          .right {
            width: 100%;
          }
          .title {
            display: none;
          }
          .main {
            flex-direction: column;
            align-items: center;
          }
          .main-left,
          .main-right {
            width: 100%;
          }
          .main-right {
            display: none;
          }
          .country-dropdown {
            width: 100%;
          }
          .search-bar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
