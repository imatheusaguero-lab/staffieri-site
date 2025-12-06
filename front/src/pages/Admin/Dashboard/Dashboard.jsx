import "./Dashboard.css";
import DashboardMenuItem from "./DashboardMenuItem";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const dashboardMenuOption = [
    { title: "Clientes", path: "/admin/clients" },
    { title: "Produtos", path: "/admin/products" },
    { title: "Serviços", path: "/admin/services" },
  ];

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        
        {/* MENU LATERAL */}
        <div className="dashboard-menu">
          <div className="dashboard-logo">
            <h1>Staffieri</h1>
          </div>

          <div className="dashboard-menu-opcoes">
            {dashboardMenuOption.map((item, index) => (
              <DashboardMenuItem
                key={index}
                title={item.title}
                onClick={() => navigate(item.path)}
              />
            ))}
          </div>
        </div>

        {/* PAINEL */}
        <div className="dashboard-painel">
          <Outlet />
        </div>

      </div>
    </section>
  );
}
