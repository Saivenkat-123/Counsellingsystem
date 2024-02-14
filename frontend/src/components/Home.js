import React, { useState } from 'react';
// import ProductList from './Productlist';
// import TodoList from './TodoList';
import DataFetch from './DataFetch';

const HomePage = () => {
  // const [cart, setCart] = useState([]);

  // const products = [
  //   { id: 1, name: 'Bottle', price: 100 },
  //   { id: 2, name: 'Bag', price: 1000 },
  // ];

  // const todos = [
  //   { id: 1, title: 'Task 1', completed: false },
  //   { id: 2, title: 'Task 2', completed: true },
  // ];

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // const calculateTotal = () => {
  //   return cart.reduce((total, product) => total + product.price, 0);
  // };

  return (
    <div>
      {/* <h1>Home Page</h1>

      <div>
        <h2>Product List</h2>
        <ProductList products={products} cart={cart} addToCart={addToCart} />
      </div>

      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>{item.name} - Rs {item.price}</li>
              ))}
            </ul>
            <p>Total: Rs {calculateTotal()}</p>
          </div>
        )}
      </div>

      <div>
        <TodoList todos={todos} />
      </div> */}
      <DataFetch/>
    </div>
  );
};

export default HomePage;