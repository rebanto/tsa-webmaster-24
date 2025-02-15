import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./AboutPage.css";

const timelineSteps = [
  {
    id: "step1",
    title: "Sourcing",
    image: "/images/Sourcing.jpeg",
    description:
      "Organic fresh ingredients sourced from local farms, ensuring sustainable practices, and supporting local farming communities.",
    modal_content:
      "We partner with local, organic farms in the region to bring the freshest seasonal produce straight to your plate. Here at Green Platter, all our vegetables are picked at peak ripeness. While other grains and nuts, and other plant based proteins are carefully selected from trusted partners who prioritize quality and eco friendly practices.",
  },
  {
    id: "step2",
    title: "Cleaning and Packaging",
    image: "/images/Packaging.jpg",
    description:
      "Reducing waste and utilizing biodegradable equipment and eco-friendly cleaning practices.",
    modal_content:
      "Once fruits and vegetables arrive, they go through a cleaning process. Each item is washed thoroughly using filtered water and natural, food safe cleaning solutions to remove any extra dirt or residue. Our delicate product is hand cleaned to avoid bruises and our sturdier items are cleaned in batches. After washing, everything is carefully stored in temperature controlled environments. Additionally, we use biodegradable packaging materials and eco-friendly cleaning waste materials to minimize waste and protect the environment. ",
  },
  {
    id: "step3",
    title: "Distribution",
    image: "/images/Distribution.jpg",
    description:
      "Implementing eco-conscious electric trucking systems to reduce the Green Platter’s eco-footprint.",
    modal_content:
      "To ensure sustainability, we collaborate with local transportation partners who use energy efficient vehicles. (i.e. electric trucks) These partnerships help us reduce emissions and maintain a minimal carbon footprint as we deliver our ingredients to the restaurant. By prioritizing sustainable distribution methods, Green Platter is able to consistently practice environmental practices at every stage of our process.",
  },
  {
    id: "step4",
    title: "Retail",
    image: "/images/Retail.jpg",
    description:
      "Buying from local suppliers reducing the need for long-distance distribution and increasing sustainability.",
    modal_content:
      "We proudly support local businesses by sourcing additional ingredients and supplies from nearby community retailers. These partnerships help strengthen local economies and reduce the need for long distance distribution services. By collaborating with these local suppliers, we ensure that every item we use aligns with our eco-friendly mission and contributes to a sustainable food system.",
  },
  {
    id: "step5",
    title: "Preparation",
    image: "/images/Preparation.jpg",
    description:
      "Utilizing reusable equipment and eco-friendly serving platters to honor our commitment to the environment.",
    modal_content:
      "At Green Platter we embrace sustainability in every step of our food preparation. From utilizing renewable energy sources in the kitchen to using reusable serving platters, we ensure that every meal reflects our commitment to the environment. By implementing these practices, we honor our responsibility to reduce our environmental footprint.",
  },
];

const About = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const closeModal = () => setSelectedStep(null);

  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="our-story">
        <h2>Our Story</h2>
        <div className="story-content gap-5">
          <p>
            The Green Platter believes food is the celebration of diversity,
            nature, and community. Our journey began from the simple idea of
            sustainability, providing plant-based meals made with the freshest
            of ingredients sourced directly from local farms to support
            preservation efforts. At the Green Platter, whether you are
            exploring plant-based cuisine, attempting to move towards more
            mindful eating, or are a lifelong vegetarian, we invite you to taste
            our fresh cuisines and help the environment, one plate at a time.
          </p>
          <img
            src="/images/story_vegetables.jpg"
            alt="Our Story"
          />
        </div>
      </section>

      <section className="our-approach">
        <h2>Our Approach</h2>
        <p>Click on each step to learn more!</p>
        <div className="timeline-container">
          <div>
            <div
              className="timeline-item align-items-center p-3 rounded-3 gap-3"
              onClick={() => setSelectedStep(timelineSteps[0])}
            >
              <img
                src={timelineSteps[0].image}
                alt={timelineSteps[0].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[0].title}</h3>
                <p>{timelineSteps[0].description}</p>
              </div>
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>

          <div>
            <div
              className="timeline-item align-items-center p-3 rounded-3 gap-3"
              onClick={() => setSelectedStep(timelineSteps[1])}
            >
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[1].title}</h3>
                <p>{timelineSteps[1].description}</p>
              </div>
              <img
                src={timelineSteps[1].image}
                alt={timelineSteps[1].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>
          <div>
            <div
              className="timeline-item align-items-center p-3 rounded-3 gap-3"
              onClick={() => setSelectedStep(timelineSteps[2])}
            >
              <img
                src={timelineSteps[2].image}
                alt={timelineSteps[2].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[2].title}</h3>
                <p>{timelineSteps[2].description}</p>
              </div>
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>
          <div>
            <div
              className="timeline-item align-items-center p-3 rounded-3 gap-3"
              onClick={() => setSelectedStep(timelineSteps[3])}
            >
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[3].title}</h3>
                <p>{timelineSteps[3].description}</p>
              </div>
              <img
                src={timelineSteps[3].image}
                alt={timelineSteps[3].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>
          <div>
            <div
              className="timeline-item align-items-center p-3 rounded-3"
              onClick={() => setSelectedStep(timelineSteps[4])}
            >
              <img
                src={timelineSteps[4].image}
                alt={timelineSteps[4].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div>
                <h3>{timelineSteps[4].title}</h3>
                <p>{timelineSteps[4].description}</p>
              </div>
            </div>
          </div>
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
        <div className="sustainability-content">
          <img
            src="/images/sustainability.jpg"
            alt="Sustainability"
          />
          <p>
            At the Green Platter, we believe sustainability is the core of what
            the Green Platter stands for. Our commitment to source our
            ingredients from local farms and stores, decreases long-distance
            trucking and contributes to the betterment of local farming
            communities and retailers. Every distribution step we take from
            sourcing to packaging ensures a fresh and sustainable dining
            experience for our customers. By choosing to dine with us at the
            Green Platter, you are enjoying delicious and fresh food, while
            supporting a sustainable future.
          </p>
        </div>
      </section>

      <section className="meet-chefs">
        <h2
          style={{ marginBottom: "30px", marginTop: "0px" }}
        >
          Meet the Chefs
        </h2>
        <div class="chefs-grid">
          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef1.jpg"
              alt="Chef A"
            />
            <h3>Head Chef</h3>
            <p>
              15+ years of experience in plant-based cuisines.
            </p>
          </div>

          <div class="chef-card">
            <img
              src="/images/chef2.jpg"
              alt="Chef B"
              class="img-fluid rounded mb-2"
            />
            <h3>Sous chef</h3>
            <p>
              Extroardinary expertise in innovative presentation.
            </p>
          </div>

          <div class="chef-card">
            <img
              src="/images/chef3.jpg"
              alt="Chef C"
            />
            <h3>Pastry chef</h3>
            <p>Passionate about sustainability and pastries.</p>
          </div>

          <div class="chef-card">
            <img
              src="/images/chef4.jpg"
              alt="Chef D"
            />
            <h3>Saucier</h3>
            <p>Bringing innovative flavors to sauces and dressings.</p>
          </div>

          <div class="chef-card">
            <img
              src="/images/chef5.jpg"
              alt="Chef E"
            />
            <h3>Garde manger</h3>
            <p>Expertise in blending cold dishes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
