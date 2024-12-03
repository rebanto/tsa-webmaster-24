import React, { useState } from "react";

function Order() {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    item: "",
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails), // send order as JSON string
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`${data.message}`); // print message returned from flask server
        setOrderDetails({ name: "", email: "", item: "", quantity: 1 });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="order-page">
      <h2>Order Your Meal</h2>
      <form onSubmit={handleSubmit}>
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
        <div>
          <label>Item: </label>
          <select
            name="item"
            value={orderDetails.item}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an item</option>
            <option value="Vegan Burger">Vegan Burger</option>
            <option value="Vegan Pizza">Vegan Pizza</option>
            <option value="Salad">Salad</option>
            <option value="Vegan Soup">Vegan Soup</option>
          </select>
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Order;
