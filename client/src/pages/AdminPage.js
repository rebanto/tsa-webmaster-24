import React, { useEffect, useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("http://localhost:5000/api/admin/orders");
      const data = await response.json();
      setOrders(data);
    };

    const fetchPendingReviews = async () => {
      const response = await fetch("http://localhost:5000/api/reviews");
      const data = await response.json();
      const unapprovedReviews = data.filter((review) => !review.approved);
      setPendingReviews(unapprovedReviews);
    };

    fetchOrders();
    fetchPendingReviews();
  }, []);

  const groupItems = (items) => {
    const grouped = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        acc.push({ ...item, quantity: item.quantity || 1 });
      }
      return acc;
    }, []);
    return grouped;
  };

  const handleCheckboxChange = async (index) => {
    const order = orders[index];
    const payload = {
      name: order.name,
      email: order.email,
      items: order.items,
    };
    const response = await fetch("http://localhost:5000/api/orders", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    setOrders(orders.filter((_, i) => i !== index));
  };

  const handleApprove = async (index) => {
    const review = pendingReviews[index];
    const reviewContent = review.content;

    const response = await fetch("http://localhost:5000/api/admin/reviews", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: reviewContent, approved: true }),
    });
    setPendingReviews(pendingReviews.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Items</th>
            <th>Number of Items</th>
            <th>Completed</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{order.customer_name}</td>
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
                  <span>No items</span>
                )}
              </td>
              <td>{order.items ? order.items.length : 0}</td>
              <td>
                <input
                  type="checkbox"
                  checked={order.completed}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{new Date(order.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "80px" }}>Pending Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Review</th>
            <th>Date Submitted</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {pendingReviews.map((review, index) => (
            <tr key={review.id}>
              <td>{review.name}</td>
              <td>{review.content}</td>
              <td>{new Date(review.date).toLocaleString()}</td>
              <td>
                <button onClick={() => handleApprove(index)}>Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
