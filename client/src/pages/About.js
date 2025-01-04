import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./AboutPage.css";

const timelineSteps = [
  {
    id: "step1",
    title: "Sourcing",
    image: "/images/Sourcing.jpg",
    description: "Organic, fresh ingredients.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step2",
    title: "Cleaning and Packaging",
    image: "/images/Cleaning.jpg",
    description: "Carefully Packaged.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step3",
    title: "Distribution",
    image: "/images/Distribution.jpg",
    description: "Eco-friendly means.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step4",
    title: "Retail",
    image: "/images/Retail.jpg",
    description: "Available at select locations.",
    modal_content: "Insert more detailed modal content here.",
  },
  {
    id: "step5",
    title: "Preparation",
    image: "/images/Preparation.jpg",
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
    <div className="about-page container">
      <header className="about-header text-center">
        <h1>About Us</h1>
      </header>

      <section className="our-story">
        <h2 className="text-center">Our Story</h2>
        <div className="story-content d-flex justify-content-center align-items-center gap-3">
          <p className="flex-1">
            Welcome to our vegetarian restaurant, where passion meets
            sustainability. Our journey began with a dream of redefining
            plant-based dining, delivering delicious meals that respect our
            planet.
          </p>
          <img
            src="/images/our_story.jpg"
            alt="Our Story"
            className="img-fluid rounded"
          />
        </div>
      </section>

      <section className="our-approach">
        <h2 className="text-center">Our Approach</h2>
        <div className="timeline-container">
          {timelineSteps.map((step, index) => (
            <div key={step.id}>
              <div
                className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
                onClick={() => setSelectedStep(step)}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-3"
                  style={{ width: "40%", height: "auto" }}
                />
                <div className="timeline-content flex-1 text-center">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              {index < timelineSteps.length - 1 && (
                <div className="arrow-container text-center">
                  <img src="images/arrow.png" alt="arrow" className="arrow-image" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {selectedStep && (
        <Modal show={true} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedStep.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedStep.modal_content}</Modal.Body>
        </Modal>
      )}

      <section className="sustainability">
        <h2 className="text-center">Commitment to Sustainability</h2>
        <div className="sustainability-content d-flex justify-content-center align-items-center gap-4">
          <img
            src="/images/sustainability.webp"
            alt="Sustainability"
            className="img-fluid rounded"
          />
          <p>
            We are dedicated to reducing waste, sourcing responsibly, and using
            eco-friendly packaging. Together, we make a positive impact on the
            environment.
          </p>
        </div>
      </section>

      <section className="meet-chefs">
        <h2
          className="text-center"
          style={{ marginBottom: "30px", marginTop: "0px" }}
        >
          Meet the Chefs
        </h2>
        <div className="chefs-grid d-flex flex-wrap justify-content-center gap-3">
          {["Nishant", "Rebanto", "Sid", "Sathvik", "Ryan"].map(
            (chefName, index) => (
              <div className="chef-card text-center p-3 shadow-sm" key={index}>
                <img
                  src={`/images/chef${index + 1}.jpeg`}
                  alt={`Chef ${chefName}`}
                  className="img-fluid rounded mb-2"
                />
                <h3>{`Chef ${chefName}`}</h3>
                <p>
                  {index === 0 &&
                    "Expert in plant-based cuisines with 15+ years of experience."}
                  {index === 1 &&
                    "Innovator in plant-based cuisine, ensuring every dish is a masterpiece."}
                  {index === 2 &&
                    "Passionate about sustainability and seasonal ingredients."}
                  {index === 3 &&
                    "Creative culinary artist bringing innovative flavors to the table."}
                  {index === 4 &&
                    "Advocate for zero-waste cooking, blending creativity with sustainability."}
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
