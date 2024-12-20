import React, { useState, useEffect } from 'react';
import './AboutPage.css';

const timelineSteps = [
  {
    id: "step1",
    title: "Sourcing",
    image: "/images/sourcing.jpeg",
    description: "We source fresh, organic ingredients from trusted local farms.",
  },
  {
    id: "step2",
    title: "Cleaning and Packaging",
    image: "/images/cleaning_packaging.jpeg",
    description: "Ingredients are carefully cleaned and packaged to maintain freshness.",
  },
  {
    id: "step3",
    title: "Distribution",
    image: "/images/cleaning_packaging.jpeg",
    description: "Our products are distributed through eco-friendly means.",
  },
  {
    id: "step4",
    title: "Retail",
    image: "/images/cleaning_packaging.jpeg",
    description: "Available at select retail locations for your convenience.",
  },
  {
    id: "step5",
    title: "Preparation",
    image: "/images/cleaning_packaging.jpeg",
    description: "Our chefs use innovative techniques to prepare healthy and delicious meals.",
  },
];

const About = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    if (selectedStep) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedStep]);

  const closeModal = () => {
    setSelectedStep(null);
  };

  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>We are a vegetarian restaurant with a commitment to sustainability and quality.</p>
      <div className="timeline-container">
        <div className="timeline">
          {timelineSteps.map((step) => (
            <div
              key={step.id}
              className="timeline-step"
              onClick={() => setSelectedStep(step)}
            >
              <img src={step.image} alt={step.title} />
              <h3>{step.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedStep && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>{selectedStep.title}</h2>
            <p>{selectedStep.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
