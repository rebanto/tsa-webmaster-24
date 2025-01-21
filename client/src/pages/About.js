import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./AboutPage.css";

const timelineSteps = [
  {
    id: "step1",
    title: "Sourcing",
    image: "/images/Sourcing.jpeg",
    description: "Organic fresh ingredients sourced directly from local farms, ensuring freshness and sustainability, and supporting local farming communities.",
    modal_content: "We partner with local, organic farms in the region to bring the freshest seasonal produce straight to your plate. Here at Green Platter, all our vegetables are picked at peak ripeness. While other grains and nuts, and other plant based proteins are carefully selected from trusted partners who prioritize quality and eco friendly practices.",
  },
  {
    id: "step2",
    title: "Cleaning and Packaging",
    image: "/images/Packaging.jpg",
    description: "Our commitment to eco-friendly cleaning & packaging, primarily utilizing biodegradable packing equipment and eco-friendly cleaning methods to prioritize reducing waste.",
    modal_content: "Once fruits and vegetables arrive, they go through a cleaning process. Each item is washed thoroughly using filtered water and natural, food safe cleaning solutions to remove any extra dirt or residue. Our delicate product is hand cleaned to avoid bruises and our sturdier items are cleaned in batches. After washing, everything is carefully stored in temperature controlled environments. Additionally, we use biodegradable packaging materials and eco-friendly cleaning waste materials to minimize waste and protect the environment. ",
  },
  {
    id: "step3",
    title: "Distribution",
    image: "/images/Distribution.jpg",
    description: "Prioritizing sustainable distribution methods by contracting our own distribution services to use shorter-distance eco-conscious equipment such as electric trucking systems to minimize the Green Platter’s environmental footprint.",
    modal_content: "To ensure sustainability, we collaborate with local transportation partners who use energy efficient vehicles. (i.e. electric trucks) These partnerships help us reduce emissions and maintain a minimal carbon footprint as we deliver our ingredients to the restaurant. By prioritizing sustainable distribution methods, Green Platter is able to consistently practice environmental practices at every stage of our process.",
  },
  {
    id: "step4",
    title: "Retail",
    image: "/images/Retail.jpg",
    description: "Support for sustainable practices by sourcing from local community suppliers and retailers, strengthening local businesses and reducing the need for long-distance distribution services.",
    modal_content: "We proudly support local businesses by sourcing additional ingredients and supplies from nearby community retailers. These partnerships help strengthen local economies and reduce the need for long distance distribution services. By collaborating with these local suppliers, we ensure that every item we use aligns with our eco-friendly mission and contributes to a sustainable food system.",
  },
  {
    id: "step5",
    title: "Preparation",
    image: "/images/Preparation.jpg",
    description: "Embracing sustainability in The Green Platter by utilizing reusable equipment, renewable energy sources and eco-friendly serving platters to honor our commitment to the environment.",
    modal_content: "At Green Platter we embrace sustainability in every step of our food preparation. From utilizing renewable energy sources in the kitchen to using reusable serving platters, we ensure that every meal reflects our commitment to the environment. By implementing these practices, we honor our responsibility to reduce our environmental footprint.",
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
            At the Green Platter, we believe that food is a celebration of
            diversity, nature, and community. Our journey stems from a simple
            idea: sustainability. We began the Green Platter because we believed
            everybody deserves to have a chance to eat plant-based meals made
            with ingredients sourced directly from local farms, providing
            nutritious and sustainable meals to our customers. We believe
            sustenance is at risk, the choices we make to locally source
            ingredients for the meals we serve is a meaningful and profound step
            in the right path for preservation. At the Green Platter, whether
            you are just exploring plant-based cuisine, attempting to move
            towards more mindful eating, or are just a lifelong vegetarian, we
            invite you to taste our fresh and exquisite locally sourced cuisine
            and contribute to the betterment of the environment, one plate at a
            time.
          </p>
          <img
            src="/images/story_vegetables.jpg"
            alt="Our Story"
            className="img-fluid rounded"
          />
        </div>
      </section>

      <section className="our-approach">
        <h2 className="text-center">Our Approach</h2>
        <div className="timeline-container">
          <div key={timelineSteps[0].id}>
            <div
              className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
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

          <div key={timelineSteps[1].id}>
            <div
              className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
              onClick={() => setSelectedStep(timelineSteps[1])}
            >
              <img
                src={timelineSteps[1].image}
                alt={timelineSteps[1].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[1].title}</h3>
                <p>{timelineSteps[1].description}</p>
              </div>
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>
          <div key={timelineSteps[2].id}>
            <div
              className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
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
          <div key={timelineSteps[3].id}>
            <div
              className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
              onClick={() => setSelectedStep(timelineSteps[3])}
            >
              <img
                src={timelineSteps[3].image}
                alt={timelineSteps[3].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div className="timeline-content flex-1 text-center">
                <h3>{timelineSteps[3].title}</h3>
                <p>{timelineSteps[3].description}</p>
              </div>
            </div>
            <div className="arrow-container text-center">
              <img src="images/arrow.png" alt="arrow" className="arrow-image" />
            </div>
          </div>
          <div key={timelineSteps[4].id}>
            <div
              className="timeline-item d-flex align-items-center gap-3 p-3 rounded-3 shadow-sm"
              onClick={() => setSelectedStep(timelineSteps[4])}
            >
              <img
                src={timelineSteps[4].image}
                alt={timelineSteps[4].title}
                className="rounded-3"
                style={{ width: "40%", height: "auto" }}
              />
              <div className="timeline-content flex-1 text-center">
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
        <div className="sustainability-content d-flex justify-content-center align-items-center gap-4">
          <img
            src="/images/sustainability.jpg"
            alt="Sustainability"
            className="img-fluid rounded"
          />
          <p>
            At the Green Platter, we believe sustainability is the core of what
            the Green Platter stands for as a locally sourced restaurant. Our
            commitment to source our ingredients from local farms and stores,
            contributes to the betterment of local farming communities and
            retailers, concurrently reducing effects of long-distance trucking
            emissions. Every distribution step we take from cleaning and
            packaging to retail is meticulously crafted to only use
            eco-conscious techniques ensuring sustainable practices beyond the
            restaurant. By choosing to dine with us at the Green Platter, you
            are enjoying delicious and fresh food, while supporting a
            sustainable future.
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
        <div class="chefs-grid d-flex flex-wrap justify-content-center gap-3">
          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef1.jpg"
              alt="Chef Nishant"
              class="img-fluid rounded mb-2"
            />
            <h3>Chef A</h3>
            <p>
              Head chef with 15+ years of experience in plant-based cuisines.
            </p>
          </div>

          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef2.jpg"
              alt="Chef Rebanto"
              class="img-fluid rounded mb-2"
            />
            <h3>Chef B</h3>
            <p>
              Sous chef with extroardinary expertise in innovative presentation.
            </p>
          </div>

          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef3.jpg"
              alt="Chef Sid"
              class="img-fluid rounded mb-2"
            />
            <h3>Chef C</h3>
            <p>Pastry chef passionate about sustainability and pastries.</p>
          </div>

          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef4.jpg"
              alt="Chef Sathvik"
              class="img-fluid rounded mb-2"
            />
            <h3>Chef D</h3>
            <p>Saucier bringing innovative flavors to sauces and dressings.</p>
          </div>

          <div class="chef-card text-center p-3 shadow-sm">
            <img
              src="/images/chef5.jpg"
              alt="Chef Ryan"
              class="img-fluid rounded mb-2"
            />
            <h3>Chef E</h3>
            <p>Garde manger with expertise in blending cold dishes.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
