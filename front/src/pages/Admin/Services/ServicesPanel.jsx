import { useNavigate } from "react-router-dom";
import "./ServicePanel.css"
export default function ServicesPanel() {
  const navigate = useNavigate();

  const services = [
    { id: "1", 
      name: "Camiseta Bordada", 
      createdAt: "20/11/2025", 
      status: "Ativo", 
      tipoProduto: "Camiseta", 
      client: "Capoeira", 
      modalidade: "Esporte", 
      sport: "Capoeira", 
      services: ["Modelagem", "Bordado","Serigrafia"]},
  ];

  return (
    <div className="services-panel">
        <div className="service-panel-product">
          <div className="service-panel-product-top">
            <div className="service-panel-product-top-left">
              {services.map(service => (
              <>
                <div className="service-panel-product-top-left-item">
                  <p>ID:</p><p>{service.id}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Produto:</p><p>{service.name}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Criado:</p><p>{service.createdAt}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Status:</p><p>{service.status}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Tipo de Produto:</p><p>{service.tipoProduto}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Modalidade</p><p>{service.modalidade}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Esporte</p><p>{service.sport}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Serviços</p><p>{service.services}</p>
                </div>
              </>
              ))}
            </div>

            <div className="service-panel-product-top-right">
              <div className="service-panel-product-top-right-delete"><p>Delete</p></div>
            </div>
          </div>

          <div className="service-panel-product-bottom">
            <h3>Imagens:</h3>
            <div className="service-panel-product-bottom-galery">
              <div className="service-panel-product-bottom-galery-image"></div>
              <div className="service-panel-product-bottom-galery-image"></div>
            </div>
          </div>
        </div>
        <div className="service-panel-product">
          <div className="service-panel-product-top">
            <div className="service-panel-product-top-left">
              {services.map(service => (
              <>
                <div className="service-panel-product-top-left-item">
                  <p>ID:</p><p>{service.id}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Produto:</p><p>{service.name}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Criado:</p><p>{service.createdAt}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Status:</p><p>{service.status}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Tipo de Produto:</p><p>{service.tipoProduto}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Modalidade</p><p>{service.modalidade}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Esporte</p><p>{service.sport}</p>
                </div>
                <div className="service-panel-product-top-left-item">
                  <p>Serviços</p><p>{service.services}</p>
                </div>
              </>
              ))}
            </div>

            <div className="service-panel-product-top-right">
              <div className="service-panel-product-top-right-delete"><p>Delete</p></div>
            </div>
          </div>
        </div>

    </div>
  );
}
