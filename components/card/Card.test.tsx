
// // Card.test.tsx
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Card from './Card';
// import { Product } from '../../types/catalog';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer, { addToCart, removeFromCart } from '../../store/slices/cart';
// import '@testing-library/jest-dom';

// // Mock product data
// const mockProduct: Product = {
//   id: 1,
//   title: 'Test Product',
//   price: 99.99,
//   description: 'A test product description',
//   image: 'https://via.placeholder.com/150',
//   category: 'electronics',
//   rating: { rate: 4.5, count: 120 },
// };

// // Utility function to render the component with Redux store
// const renderWithStore = (component: React.ReactNode, preloadedState = {}) => {
//   const store = configureStore({
//     reducer: { cart: cartReducer },
//     preloadedState,
//   });

//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   };
// };

// describe('Card Component', () => {
//   test('renders product title and price', () => {
//     renderWithStore(<Card product={mockProduct} />);

//     expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
//     expect(screen.getByText(/Price: \$99.99/i)).toBeInTheDocument();
//   });

//   test('renders "Add to Cart" button if product is not in cart', () => {
//     renderWithStore(<Card product={mockProduct} />);

//     const button = screen.getByText(/Add to Cart/i);
//     expect(button).toBeInTheDocument();
//   });

//   test('renders "Remove from Cart" button if product is in cart', () => {
//     const preloadedState = {
//       cart: { items: [mockProduct] },
//     };
//     renderWithStore(<Card product={mockProduct} />, preloadedState);

//     const button = screen.getByText(/Remove from Cart/i);
//     expect(button).toBeInTheDocument();
//   });

//   test('dispatches addToCart action when clicking "Add to Cart" button', () => {
//     const { store } = renderWithStore(<Card product={mockProduct} />);

//     const button = screen.getByText(/Add to Cart/i);
//     fireEvent.click(button);

//     const state = store.getState();
//     expect(state.cart.items).toContainEqual(mockProduct);
//   });

//   test('dispatches removeFromCart action when clicking "Remove from Cart" button', () => {
//     const preloadedState = {
//       cart: { items: [mockProduct] },
//     };
//     const { store } = renderWithStore(<Card product={mockProduct} />, preloadedState);

//     const button = screen.getByText(/Remove from Cart/i);
//     fireEvent.click(button);

//     const state = store.getState();
//     expect(state.cart.items).not.toContainEqual(mockProduct);
//   });
// });
