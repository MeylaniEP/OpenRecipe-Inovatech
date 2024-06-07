import Ads from "../components/Ads";
import CartUser from "../components/shop/CartUser";
import FilterMenu from "../components/shop/FilterMenu";
import IconShop from "../components/shop/IconShop";
import { IoIosSearch } from "react-icons/io";

function Shop() {
  return (
    <div className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-column mx-4 mt-3" style={{ width: "70%" }}>
        {/* search */}
        <div className="mb-4">
          <div
            className="d-flex flex-row align-items-center"
            style={{
              display: "flex",
              color: "rgba(42, 122, 178, 1)",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "10px",
              boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
              marginTop: "1.5em",
              width: "90%",
              height: "3.63rem",
            }}
          >
            <div className="d-flex flex-row gap-4 mx-3" style={{width:"100%"}}>
              <IoIosSearch className="fs-3" />
              <p className="m-0">Search your need</p>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="mx-3 mb-4">
          <FilterMenu />
        </div>

        {/* card section */}
        <div>
          <h2>Spice</h2>
          <div className="d-flex flex-row flex-wrap gap-2" style={{}}>
            <IconShop />
            <IconShop />
            <IconShop />
            <IconShop />
            <IconShop />
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mx-2 mt-5" style={{width:"28%"}}>
        <CartUser />
      </div>
    </div>
  );
}

export default Shop;
