import React, { useEffect, useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [orders, setOrders] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);

  useEffect(() => {
    fetch("https://server-yyj7.onrender.com/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });

    fetch("https://server-yyj7.onrender.com/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setPendingReviews(data.filter((review) => !review.approved));
      });
  }, []);

  const groupItems = (items) => {
    const grouped = [];
    for (const item of items) {
      const existingItem = grouped.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.count += item.count;
      } else {
        grouped.push({ ...item, count: item.count });
      }
    }
    return grouped;
  };

  const handleCheckboxChange = async (index) => {
    const order = orders[index];
    const payload = {
      name: order.name,
      email: order.email,
      items: order.items,
    };
    await fetch("https://server-yyj7.onrender.com/api/orders", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    setOrders(orders.filter((j, i) => i !== index));
  };

  const handleApprove = async (index) => {
    const review = pendingReviews[index];
    const reviewContent = review.content;

    await fetch("https://server-yyj7.onrender.com/api/admin/reviews", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: reviewContent, approved: true }),
    });
    setPendingReviews(pendingReviews.filter((j, i) => i !== index));
  };

  const handleReviewDelete = async (index) => {
    const review = pendingReviews[index];
    const payload = {
      content: review.content,
    };

    await fetch("https://server-yyj7.onrender.com/api/reviews", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    setPendingReviews(pendingReviews.filter((j, i) => i !== index));
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <p><strong>**Note:</strong> This page is shown to everyone as a demonstration of the capabilities of this website. In a real production environment, a key or login would be required to access this page.
      This page only updates with the data users input and that flows through the database, no new code is added.</p>

      <p><strong>How to Use:</strong></p>
       <p> 
        Add items to the cart from the Menu page. Then, finish the order in Cart. The order will appear in the Orders table below. You can mark the order as completed by checking the checkbox.
      </p>
      <p>
        To add a review, go to the Reviews page and submit a review. The review will appear in the Pending Reviews table below. You can approve or delete the review from this page.
      </p>

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
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={order.id}>
                <td>{order.customer_name}</td>
                <td>{order.email}</td>
                <td>
                  <ul>
                    {groupItems(order.items).map((item, idx) => (
                      <li key={idx}>
                        {item.name} - ${item.price}{" "}
                        {item.count > 1 && `x${item.count}`}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{order.items.length}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={order.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No orders available.
              </td>
            </tr>
          )}
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
              <td className="d-flex justify-content-around">
                <button onClick={() => handleApprove(index)}>Approve</button>
                <button onClick={() => handleReviewDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;