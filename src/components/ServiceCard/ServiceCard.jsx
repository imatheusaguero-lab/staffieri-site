import "./ServiceCard.css";

function ServiceCard({ image, title }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-img" />
      <p className="service-title">{title}</p>
    </div>
  );
}

export default ServiceCard;
