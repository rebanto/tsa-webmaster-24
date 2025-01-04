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
      const response = await fetch("http://localhost:5000/api/admin/reviews");
      const data = await response.json();
      setPendingReviews(data);
    };

    fetchOrders();
    fetchPendingReviews();
  }, []);

  const groupItems = (items) => {
    const grouped = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.count;
      } else {
        acc.push({ ...item, quantity: item.count });
      }
      return acc;
    }, []);
    return grouped;
  };

  const handleCheckboxChange = async (index) => {
    try {
      const order = orders[index];
      const orderId = order._id || index;

      const response = await fetch(
        `http://localhost:5000/api/orders/${orderId}`,
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

  const handleApprove = async (index) => {
    try {
      const review = pendingReviews[index];
      const reviewId = review.id;
  
      if (!reviewId) {
        console.error("Review ID is missing!");
        return;
      }
  
      const response = await fetch(
        `http://localhost:5000/api/admin/reviews/${reviewId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approved: true }),
        }
      );
      
      if (response.ok) {
        setPendingReviews(pendingReviews.filter((_, i) => i !== index));
      } else {
        console.error("Failed to approve review");
      }
    } catch (error) {
      console.error("Error approving review:", error);
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
            <th>Number of Items</th>
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
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop: '80px'}}>Pending Reviews</h2>
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
            <tr key={index}>
              <td>{review.name}</td>
              <td>{review.content}</td>
              <td>{review.date}</td>
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
