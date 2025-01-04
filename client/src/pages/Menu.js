import React, { useState, useEffect } from "react";
import "./MenuPage.css";
import menuItems from "./menuItems.json";

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.count += 1;
    } else {
      updatedCart.push({ ...item, count: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === itemId) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.count, 0)
      .toFixed(2);
  };

  const getCartSummary = () => {
    const summary = cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.count += item.count;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    return summary;
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-content">
        <div className="menu-section" key="specialtyDrinks">
          <div className="category-title">SPECIALTY DRINKS</div>
          <div className="menu-items">
            {menuItems.specialtyDrinks.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section" key="soupsSalads">
          <div className="category-title">SOUPS & SALADS</div>
          <div className="menu-items">
            {menuItems.soupsSalads.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section" key="appetizers">
          <div className="category-title">APPETIZERS</div>
          <div className="menu-items">
            {menuItems.appetizers.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section" key="entrees">
          <div className="category-title">ENTREES</div>
          <div className="menu-items">
            {menuItems.entrees.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section" key="desserts">
          <div className="category-title">DESSERTS</div>
          <div className="menu-items">
            {menuItems.desserts.map((item) => (
              <div key={item.id} className="menu-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-item-image"
                />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">${item.price}</p>
                </div>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cart">
        <h3>Your Cart</h3>
        <ul>
          {getCartSummary().map((item) => (
            <li key={item.id}>
              {item.name} x {item.count} - ${item.price * item.count}
              <button
                className="btn btn-sm btn-success"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
            </li>
          ))}
        </ul>
        <div className="total">Total: ${getTotalPrice()}</div>
      </div>
    </div>
  );
}

export default Menu;
