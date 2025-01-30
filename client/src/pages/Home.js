import React, { useEffect } from "react";
import { animate, stagger } from "motion";
import { useSpring, animated } from "react-spring";
import "./Home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AnimatedNumber({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

function Home() {
  useEffect(() => {
    animate(
      "body",
      { opacity: [0, 1], scale: [0.99, 1] },
      { duration: 0.5, easing: "ease-in" }
    );
  }, []);

  return (
    <div className="home">
      <div
        id="carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/PreparationEnd.jpg"
            />
            <div className="carousel-caption">
              <h1 className="display-4">Welcome to The Green Platter</h1>
              <p className="lead">
                Plant-Based Perfection, Crafted with Love ❤️
              </p>
              <a href="/menu" className="btn btn-primary mt-3">
                View Our Menu
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/Preparation.jpg"
            />
            <div className="carousel-caption">
              <h1 className="display-4">Savor Delights</h1>
              <p className="lead">
                Indulge in fresh, locally sourced, and delicious vegan cuisine
                that nourishes the body and soul.
              </p>
              <a href="/menu" className="btn btn-primary mt-3">
                View Our Menu
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/home_sustainability.jpg"
            />
            <div className="carousel-caption">
              <h1 className="display-4">Environmental Eats</h1>
              <p className="lead">
                We carefully source and prepare our meals to minimize our carbon
                footprint and be as eco-friendly as possible. 🌿
              </p>
              <a href="/menu" className="btn btn-primary mt-3">
                View Our Menu
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col  mb-4">
            <div className="info-box shadow p-4">
              <h2 className="mb-3">About Us</h2>
              <p>
                At Green Platter, we create delicious plant-based meals using
                fresh, locally sourced ingredients. Our mission is to offer a
                sustainable, cruelty-free dining experience in a warm and
                welcoming space.
              </p>
              <a href="/about" className="btn btn-primary mt-3">
                About Us
              </a>
            </div>
          </div>
          <div className="col mb-4">
            <div className="info-grid">
              <div className="info-square shadow">
                <i className="fas fa-seedling fa-2x"></i>
                <p>Plant-Based</p>
              </div>
              <div className="info-square shadow">
                <i className="fas fa-location-dot fa-2x"></i>
                <p>Locally Sourced</p>
              </div>
              <div className="info-square shadow ">
                <i className="fas fa-utensils fa-2x"></i>
                <p>Diverse Meals</p>
              </div>
              <div className="info-square shadow">
                <i className="fas fa-globe fa-2x"></i>
                <p>Eco-Friendly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section p-5 shadow text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <AnimatedNumber n={2} />
              </h1>
              <p>Michelin Stars</p>
            </div>
            <div className="col">
              <h1>
                <AnimatedNumber n={3} />+
              </h1>
              <p>Michelin Green Stars</p>
            </div>
            <div className="col">
              <h1>A</h1>
              <p>Health & Safety Grade</p>
            </div>
            <div className="col">
              <h1>
                <AnimatedNumber n={50} />+
              </h1>
              <p>Culinary Awards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseOne"
              >
                How does The Green Platter ensure sustainability?
              </button>
            </h2>
            <div
              id="faqCollapseOne"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body show">
                We are committed to sustainability in all aspects of our
                business. We source local ingredients, and plan out minimal carbon footprint preparations for our meals. In additiona, we use eco-friendly packagin and implement effective recycling.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseTwo"
              >
                How can I order?
              </button>
            </h2>
            <div
              id="faqCollapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                You can place a order by navigating to the menu page of our website. After adding your items, navigate to the order page and proceed with checkout.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapseThree"
              >
                Are all of the meals in The Green Platter vegetarian?
              </button>
            </h2>
            <div
              id="faqCollapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Yes, all of the meals at The Green Platter are vegetarian. We do not use any meat or animal products in our dishes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
