import React, { useState, useEffect } from "react";
import "./ReviewPage.css";

const Reviews = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", content: "" });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        const approvedReviews = data
          .filter((review) => review.approved)
          .map((review) => ({
            ...review,
            formattedDate: new Date(review.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }));
        setReviews(approvedReviews);
      });
  }, []);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const reviewWithDate = {
      ...newReview,
      date: formattedDate,
      approved: false,
    };

    await fetch("http://127.0.0.1:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewWithDate),
    });
    setNewReview({ name: "", content: "" });
    setIsFormVisible(false);
    alert(
      "Review sent successfully, and will be visible once an admin approves it."
    );
  };

  return (
    <div className="reviews-page container">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Customer Reviews</h1>
        <button
          className="btn btn-primary"
          title="Create Review"
          aria-label="Create Review"
          onClick={() => setIsFormVisible(true)}
        >
          Create Review
        </button>
      </header>

      {isFormVisible && (
        <div className="review-form-container shadow-lg p-4 rounded mb-4">
          <h2 className="mb-3">Write a Review</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={newReview.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Your Review
              </label>
              <textarea
                id="content"
                name="content"
                className="form-control"
                rows="3"
                value={newReview.content}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn cancel-btn"
                onClick={() => setIsFormVisible(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="reviews-container mt-3">
        {reviews.map((review, index) => (
          <div className="review p-3 mb-3 shadow-sm rounded" key={index}>
            <h3 className="mb-2">{review.name}</h3>
            <p>"{review.content}"</p>
            <small className="text-muted">
              Posted on {review.formattedDate}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
