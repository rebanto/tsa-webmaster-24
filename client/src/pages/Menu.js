import React, { useState } from 'react';
import './MenuPage.css';

function Menu() {
  const [cart, setCart] = useState([]);
  
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', description: 'add description', price: 12.99 },
    { id: 2, name: 'Pasta Primavera', description: 'add description', price: 10.99 },
    { id: 3, name: 'Caesar Salad', description: 'add description', price: 8.99 },
    { id: 4, name: 'Vegetarian Burger', description: 'add description', price: 11.99 },
  ];

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="menu">
      <div className="menu-content">
        <h2>Our Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price}</p>
              </div>
              <button className="add-to-cart" onClick={() => addToCart(item)}>+ Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <div className="total">Total: ${getTotalPrice()}</div>
      </div>
    </div>
  );
}

export default Menu;
