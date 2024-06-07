import React from 'react'

function FilterMenu() {
  return (
    <div className='d-flex flex-row gap-3'>
      <div className='text-light' style={{backgroundColor:"rgba(42, 122, 178, 1)", borderRadius:"5px", padding:"0em 0.5em"}}>
        Spice
      </div>
      <div style={{border:"rgba(42, 122, 178, 1) solid 1px", borderRadius:"5px", padding:"0em 0.5em"}}>
        Fish
      </div>
      <div style={{border:"rgba(42, 122, 178, 1) solid 1px", borderRadius:"5px", padding:"0em 0.5em"}}>
        Chicken
      </div>
      <div style={{border:"rgba(42, 122, 178, 1) solid 1px", borderRadius:"5px", padding:"0em 0.5em"}}>
        Meat
      </div>
      <div style={{border:"rgba(42, 122, 178, 1) solid 1px", borderRadius:"5px", padding:"0em 0.5em"}}>
        Vegis
      </div>
      <div style={{border:"rgba(42, 122, 178, 1) solid 1px", borderRadius:"5px", padding:"0em 0.5em"}}>
        Fruits
      </div>
    </div>
  )
}

export default FilterMenu
