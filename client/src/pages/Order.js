import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import './Order.css';

function Order() {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
  });
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
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

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.count, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCartSubmit = (e) => {
    e.preventDefault();
    
    const cartSummary = getCartSummary();
    
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: orderDetails.name,
        email: orderDetails.email,
        items: cartSummary,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Order submitted.`);
        setCart([]);
        localStorage.removeItem('cart');
      })
      .catch((error) => console.error("error:", error));
  };

  const handleGoToMenu = () => {
    navigate("/menu"); 
  };

  return (
    <div className="order-page">
      <h2>Order Your Meal</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Please add some items from the menu.</p>
            <button onClick={handleGoToMenu} className="go-to-menu-btn">Go to Menu</button>
          </div>
        ) : (
          <>
            <h3>Cart</h3>
            <ul>
              {getCartSummary().map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} {item.count > 1 && `x${item.count}`}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#E07A5F',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '5px'
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">
              <strong>Total: ${getTotal()}</strong>
            </div>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Order;
