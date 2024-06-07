import React from "react";
import Panggang from "../assets/main courses/panggang.jpg";
import Rendang from "../assets/main courses/rendang.jpg";

function ListFoodVarian() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-start">
      <div
        className="d-flex flex-column m-2"
        style={{ flex: "1 1 200px", minWidth: "200px", maxWidth: "150px" }}
      >
        <div style={{ width: "100%" }}>
          <img
            className="img-fluid border"
            style={{ borderRadius: "1em" }}
            src={Rendang}
            alt=""
          />
        </div>
        <p className="m-0 p-0" style={{ fontSize: "calc(1vw + 0.35em)" }}>
          Beef Rendang Khas Minang
        </p>
        <p style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}>
          1234x ditonton
        </p>
      </div>
      <div
        className="d-flex flex-column m-2"
        style={{ flex: "1 1 200px", minWidth: "200px", maxWidth: "150px" }}
      >
        <div style={{ width: "100%" }}>
          <img
            className="img-fluid border"
            style={{ borderRadius: "1em" }}
            src={Panggang}
            alt=""
          />
        </div>
        <p className="m-0 p-0" style={{ fontSize: "calc(1vw + 0.35em)" }}>
          Beef Panggang BBQ
        </p>
        <p style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}>
          1234x ditonton
        </p>
      </div>
      <div
        className="d-flex flex-column m-2"
        style={{ flex: "1 1 200px", minWidth: "200px", maxWidth: "150px" }}
      >
        <div style={{ width: "100%" }}>
          <img
            className="img-fluid border"
            style={{ borderRadius: "1em" }}
            src={Panggang}
            alt=""
          />
        </div>
        <p className="m-0 p-0" style={{ fontSize: "calc(1vw + 0.35em)" }}>
          Beef Rendang Khas Minang
        </p>
        <p style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}>
          1234x ditonton
        </p>
      </div>
      <div
        className="d-flex flex-column m-2"
        style={{ flex: "1 1 200px", minWidth: "200px", maxWidth: "150px" }}
      >
        <div style={{ width: "100%" }}>
          <img
            className="img-fluid border"
            style={{ borderRadius: "1em" }}
            src={Panggang}
            alt=""
          />
        </div>
        <p className="m-0 p-0" style={{ fontSize: "calc(1vw + 0.35em)" }}>
          Beef Rendang Khas Minang
        </p>
        <p style={{ fontSize: "calc(0.8vw + 0.2em)", color: "grey" }}>
          1234x ditonton
        </p>
      </div>
    </div>
  );
}

export default ListFoodVarian;
