import React, { useEffect, useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/admin/orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchOrders();
  }, []);

  const groupItems = (items) => {
    const grouped = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    return grouped;
  };

  const handleCheckboxChange = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/${index}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setOrders(orders.filter((_, i) => i !== index));
      } else {
        console.error("Failed to delete order");
      }
    } catch (error) {
      console.error("error:", error);
    }
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
            <th>Items</th>
            <th>Quantity</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>
                {order.items ? (
                  <ul>
                    {groupItems(order.items).map((item, idx) => (
                      <li key={idx}>
                        {item.name} - ${item.price}{" "}
                        {item.quantity > 1 && `x${item.quantity}`}
                      </li>
                    ))}
                  </ul>
                ) : (
                  order.item
                )}
              </td>
              <td>{order.quantity || order.items.length}</td>
              <td>
                <input
                  type="checkbox"
                  checked={order.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
