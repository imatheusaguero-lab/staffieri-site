import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>

        <div className="services-grid">
          <ServiceCard image="/images/serigrafia.png" title="Serigrafia" />
          <ServiceCard image="/images/sublimacao.png" title="Sublimação" />
          <ServiceCard image="/images/modelagem.png" title="Modelagem" />
          <ServiceCard image="/images/bordado.png" title="Bordado" />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
