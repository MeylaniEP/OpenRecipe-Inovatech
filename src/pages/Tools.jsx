import Blender from "../assets/tools/blender.png";
import Ads from "../components/Ads";
import ItemTools from "../components/menuTools/ItemTools";

function Tools() {
  const itemCooks = [
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
    {name: "Balnder",image:Blender },
  ]
  return (
    <div
    className="container-inggredientsMenu d-flex flex-row justify-content-between"
    style={{ backgroundColor: "#FAF9F6", height: "100vh" }}
  >
    <div className="d-flex flex-row mx-lg-5 mt-5 justify-content-between w-100">
      <div className="d-flex flex-column" style={{}}>
        <div>
          <div>
            <h2>Modern</h2>
          </div>
          <div className="d-flex felx-row ">
            <div>
              <ItemTools itemCooks={itemCooks} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2>Tradisional</h2>
          </div>
          <div className="d-flex felx-row">
            <div>
              <ItemTools itemCooks={itemCooks} />
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
      .container-tool{
         margin: 1em 0.5em;
         }
    }
      `}
    </style>
  </div>
  )
}

export default Tools
