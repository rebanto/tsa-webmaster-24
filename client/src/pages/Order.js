import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

function Order() {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    promo: "",
    totalPrice: 0,
  });
  const [cart, setCart] = useState([]);
  const [promoApplied, setPromoApplied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    let total = getTotalPrice();
    if (orderDetails.promo === "Spring25") {
      total = total - total * 0.25;
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
    }
    setOrderDetails((prevState) => ({
      ...prevState,
      totalPrice: total.toFixed(2),
    }));
  }, [cart, orderDetails.promo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const getCartSummary = () => {
    const summary = [];

    cart.forEach((item) => {
      const existingItem = summary.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.count += item.count;
      } else {
        summary.push({ ...item });
      }
    });

    return summary;
  };

  const getTotalPrice = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.count;
    });

    return total;
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
    });
    alert(`Order submitted.`);
    setCart([]);
    localStorage.removeItem("cart");
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
            <button onClick={handleGoToMenu} className="go-to-menu-btn">
              Go to Menu
            </button>
          </div>
        ) : (
          <>
            <h3>Cart</h3>
            <p>
              <strong>Seasonal Promo Code: Spring25</strong>
            </p>
            <ul>
              {getCartSummary().map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price}{" "}
                  {item.count > 1 && `x${item.count}`}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#E07A5F",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">
              <strong>Total: ${orderDetails.totalPrice}</strong>
            </div>
            <form onSubmit={handleCartSubmit}>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={orderDetails.name}
                onChange={handleInputChange}
                required
              />
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={orderDetails.email}
                onChange={handleInputChange}
                required
              />
              <label>Promo Code: </label>
              <input
                type="text"
                name="promo"
                value={orderDetails.promo}
                onChange={handleInputChange}
              />
              {orderDetails.promo !== "" ? (
                orderDetails.promo === "Spring25" ? (
                  <div className="alert alert-success mt-3">
                    Promo code applied, 25% discount received! 😀
                  </div>
                ) : (
                  <div className="alert alert-danger mt-3">
                    Invalid promo code ☹️
                  </div>
                )
              ) : null}

              <button type="submit">Place Cart Order</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Order;
