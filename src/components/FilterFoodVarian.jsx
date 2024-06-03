import React from "react";
import { NavLink } from "react-bootstrap";

function FilterFoodVarian() {
  return (
    <div className='d-flex flex-row gap-3'>
      <NavLink>Quick Cook</NavLink>
      <NavLink>Event Saat ini</NavLink>
      <NavLink>Trends</NavLink>
    </div>
  );
}

export default FilterFoodVarian;
