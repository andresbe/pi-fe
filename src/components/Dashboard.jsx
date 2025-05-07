import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { Navbar } from "./Navbar";

const Dashboard = ({ SidebarToggle, setSidebarToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Lógica adicional antes de cerrar sesión
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className={`${SidebarToggle ? "" : ""} w-full`}>
      <Navbar SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle} />
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
