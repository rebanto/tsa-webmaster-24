import React, { useState, useEffect } from "react";
import "./AboutPage.css";

const timelineSteps = [
  {
    id: "step1",
    title: "Sourcing",
    image: "/images/sourcing.jpeg",
    description: "Organic, fresh ingredients.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step2",
    title: "Cleaning and Packaging",
    image: "/images/cleaning_packaging.jpeg",
    description: "Carefully Packaged.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step3",
    title: "Distribution",
    image: "/images/sourcing.jpeg",
    description: "Eco-friendly means.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step4",
    title: "Retail",
    image: "/images/cleaning_packaging.jpeg",
    description: "Available at select locations.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step5",
    title: "Preparation",
    image: "/images/sourcing.jpeg",
    description: "Innovative, delicious meals.",
    modal_content: "Insert more detailed modal content here.",
  },
];

const About = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    if (selectedStep) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedStep]);

  const closeModal = () => setSelectedStep(null);

  return (
    <div className="about-page">
      {/* About Us Header */}
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content">
          <p>
            Welcome to our vegetarian restaurant, where passion meets
            sustainability. Our journey began with a dream of redefining
            plant-based dining, delivering delicious meals that respect our
            planet.
          </p>
          <img src="/images/our_story.jpeg" alt="Our Story" />
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach">
        <h2>Our Approach</h2>
        <div className="timeline-container">
          {timelineSteps.map((step, index) => (
            <div
              key={step.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              onClick={() => setSelectedStep(step)}
            >
              <img src={step.image} alt={step.title} />
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedStep && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                X
              </button>
              <h2>{selectedStep.title}</h2>
              <p>{selectedStep.modal_content}</p>
            </div>
          </div>
        )}
      </section>

      {/* Commitment to Sustainability Section */}
      <section className="sustainability">
        <h2>Commitment to Sustainability</h2>
        <div className="sustainability-content">
          <img src="/images/sustainability.jpeg" alt="Sustainability" />
          <p>
            We are dedicated to reducing waste, sourcing responsibly, and using
            eco-friendly packaging. Together, we make a positive impact on the
            environment.
          </p>
        </div>
      </section>

      {/* Meet the Chefs Section */}
      <section className="meet-chefs">
        <h2>Meet the Chefs</h2>
        <div className="chefs-grid">
          <div className="chef-card">
            <img src="/images/chef1.jpeg" alt="Chef 1" />
            <h3>Chef Nishant</h3>
            <p>Expert in plant-based cuisines with 15+ years of experience.</p>
          </div>
          <div className="chef-card">
            <img src="/images/chef2.jpeg" alt="Chef 2" />
            <h3>Chef Rebanto</h3>
            <p>
              Innovator in plant-based cuisine, ensuring every dish is a
              masterpiece.
            </p>
          </div>
          <div className="chef-card">
            <img src="/images/chef3.jpeg" alt="Chef 3" />
            <h3>Chef Sid</h3>
            <p>Passionate about sustainability and seasonal ingredients.</p>
          </div>
          <div className="chef-card">
            <img src="/images/chef3.jpeg" alt="Chef 3" />
            <h3>Chef Sathvik</h3>
            <p>
              Creative culinary artist bringing innovative flavors to the table.
            </p>
          </div>
          <div className="chef-card">
            <img src="/images/chef3.jpeg" alt="Chef 3" />
            <h3>Chef Ryan</h3>
            <p>
              Advocate for zero-waste cooking, blending creativity with
              sustainability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
