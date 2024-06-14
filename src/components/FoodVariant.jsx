// import { NavLink } from 'react-bootstrap';

// function FoodVariant({ setCategory }) {
//   return (
//     <div className='d-flex flex-row gap-3'>
//       <NavLink onClick={() => setCategory("Main Course")}>Main Course</NavLink>
//       <NavLink onClick={() => setCategory("Dessert")}>Dessert</NavLink>
//       <NavLink onClick={() => setCategory("Appetize")}>Appetizer</NavLink>
//       <NavLink onClick={() => setCategory("Bakery")}>Bakery</NavLink>
//     </div>
//   );
// }

// export default FoodVariant;
import { NavLink } from 'react-bootstrap';
import { useState } from 'react';

function FoodVariant({ setCategory }) {
  const [activeCategory, setActiveCategory] = useState("Main Course");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const linkStyle = (category) => ({
    textDecoration: 'none',
    padding: '10px',
    color: activeCategory === category ? 'rgba(42, 122, 178, 1)' : 'black',
    fontWeight : activeCategory === category ? 'bold' : 'normal',
    borderBottom: activeCategory === category ? '2.5px solid rgba(42, 122, 178, 1)' : 'none'
  });

  return (
    <div className='d-flex flex-row gap-3'>
      <NavLink style={linkStyle("Main Course")} onClick={() => handleCategoryClick("Main Course")}>Main Course</NavLink>
      <NavLink style={linkStyle("Dessert")} onClick={() => handleCategoryClick("Dessert")}>Dessert</NavLink>
      <NavLink style={linkStyle("Appetize")} onClick={() => handleCategoryClick("Appetize")}>Appetizer</NavLink>
      <NavLink style={linkStyle("Bakery")} onClick={() => handleCategoryClick("Bakery")}>Bakery</NavLink>
    </div>
  );
}

export default FoodVariant;
