import React, { useEffect, useState } from "react";
import './AdminPage.css';

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].completed = !updatedOrders[index].completed;
    setOrders(updatedOrders);
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            !order.completed && (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={order.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
