import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './src/pages/Home'; 
import '@testing-library/jest-dom/extend-expect';

test('renders Home component', () => {
  render(<Home />);
  
  expect(screen.getByText('What Would You Like To Cook Today ?')).toBeInTheDocument();
  
  expect(screen.getByText('Search any recipes')).toBeInTheDocument();
  
  expect(screen.getByLabelText('Choose Country')).toBeInTheDocument();
  
  const ingredientElements = screen.getAllByRole('img');
  expect(ingredientElements).toHaveLength(ingredients.length);
  
});
