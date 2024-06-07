import React from "react";
import Jahe2 from "../../assets/shop/ginger2.png";
import { BsCartFill } from "react-icons/bs";

function IconShop() {
  return (
    <div>
      <div className="card-shop card" style={{ maxWidth: "13rem", }}>
        <img src={Jahe2} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column gap-2">
          <h5 className="card-title" style={{ fontSize: "1em" }}>
            Fres Merapi Ginger - Kg
          </h5>
          <div className="d-flex flex-row gap-1">
            <button className="btn" style={{border:"rgba(42, 122, 178, 1) solid 1px", padding:"0px 0.5em"}}>Terlaris</button>
            <button className="btn" style={{border:"rgba(42, 122, 178, 1) solid 1px", padding:"0px 0.5em"}}>Fresh</button>
          </div>
          <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
            <div>
              <p className="m-0 fw-bold" style={{ fontSize: "0.9em" }}>Rp 500.000</p>
              <p className="m-0" style={{ fontSize: "0.7em" }}>100+ Terjual</p>
            </div>
            <div className="d-flex align-items-end justify-content-center">
              <a
                href="#"
                className="btn text-light text-center"
                style={{
                  backgroundColor: "rgba(42, 122, 178, 1)",
                  borderRadius: "100%",
                }}
              >
                <BsCartFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconShop;
