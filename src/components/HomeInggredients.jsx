import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeIngredients = ({ ingredients }) => {
  return (
    <div
      className="container-inggredients d-flex flex-column p-4 align-items-start fish-container"
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
      <h4 className="title-inggredients" style={{ width: "55%" }}>
        Choose Recipe by Ingredients
      </h4>
      <div className="scrollable-container w-100">
        <div className="scrollable-ingredients d-flex flex-lg-wrap gap-2 justify-content-start align-items-center">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center border rounded ingredient-box"
            >
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="ingredient-image"
              />
              <label className="text-center" htmlFor={ingredient.name}>
                {ingredient.name}
              </label>
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
      .container-inggredients{
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
        .title-inggredients{
        width:100%;
        }
      }
      `}</style>
    </div>
  );
};

export default HomeIngredients;
