import React from 'react'
import { NavLink } from 'react-bootstrap'

function FoodVariant() {
  return (
    <div className='d-flex flex-row gap-3'>
        <NavLink>Main Course</NavLink>
        <NavLink>Desert</NavLink>
        <NavLink>Appetizer</NavLink>
        <NavLink>Bakery</NavLink>
      
    </div>
  )
}

export default FoodVariant
