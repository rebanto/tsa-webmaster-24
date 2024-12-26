import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import menuItems from './menuItems.json';

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const getCartSummary = () => {
    const summary = cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);
    return summary;
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-content">
        {Object.keys(menuItems).map((category) => (
          <div className="menu-section" key={category}>
            <div className="category-title">{category.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
            <div className="menu-items">
              {menuItems[category].map((item) => (
                <div key={item.id} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p className="price">${item.price}</p>
                  </div>
                  <button className="add-to-cart" onClick={() => addToCart(item)}>+ Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Your Cart</h3>
        <ul>
          {getCartSummary().map((item) => (
            <li key={item.id}>
              {item.name} x {item.count} - ${item.price * item.count}
            </li>
          ))}
        </ul>
        <div className="total">Total: ${getTotalPrice()}</div>
      </div>
    </div>
  );
}

export default Menu;
