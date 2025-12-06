import { Routes, Route } from "react-router-dom";
import ServicesPanel from "./Services/ServicesPanel.jsx";
import ServiceDetails from "./Services/ServiceDetails.jsx";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="services" element={<ServicesPanel />} />
      <Route path="services/new" element={<div>Adicionar Serviço</div>} />
      <Route path="services/:id" element={<ServiceDetails />} />
    </Routes>
  );
}
