import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";
import { useState } from "react"

export default function ServicesSection() {
  const cards = [
    { title: "Serigrafia", image: "" },
    { title: "Sublimação", image: "" },
    { title: "Modelagem", image: "" },
    { title: "Bordado", image: "" }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>

        <div className="services-carousel">
          <div className="services-grid">
            {cards.map((c, i) => (
              <ServiceCard key={i} title={c.title} image={c.image} />
            ))}
          </div>

          <div className="services-carousel-arrows">
            <button className="icon-arrown-services"><IoIosArrowBack /></button>
            
            <button className="icon-arrown-services"><IoIosArrowForward /></button>
          </div>
        </div>
        <div className="services-info">

        </div>
      </div>
    </section>
  );
}