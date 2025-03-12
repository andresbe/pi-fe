import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (clear session, etc.)
    navigate("/");
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2>Welcome to the Dashboard</h2>
      <p>You are successfully logged in.</p>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
