import React, { useState, useEffect } from "react";
import './Order.css';

function Order() {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleCartSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: orderDetails.name, email: orderDetails.email, items: cart }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${data.message}`);
        setCart([]);
        localStorage.removeItem('cart');
      })
      .catch((error) => console.error("error:", error));
  };

  return (
    <div className="order-page">
      <h2>Order Your Meal</h2>
      <div className="cart">
        <h3>Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        {cart.length > 0 && (
          <form onSubmit={handleCartSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Place Cart Order</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Order;
