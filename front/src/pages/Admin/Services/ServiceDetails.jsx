import { useParams } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();

  return (
    <div className="service-details">
      <h2>Detalhes do Serviço</h2>

      <p><strong>ID:</strong> {id}</p>
      <p><strong>Nome:</strong> Camiseta Bordada</p>

      <p><strong>Imagens:</strong></p>
      <div className="service-images">
        <div className="image-placeholder">Imagem 1</div>
        <div className="image-placeholder">Imagem 2</div>
        <div className="image-placeholder">Imagem 3</div>
      </div>
    </div>
  );
}
