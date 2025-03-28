import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from './features/auth/LoginRegister';
import Dashboard from "./features/dashboard/Dashboard";


function App() {
  return (
    <div>
      <LoginRegister />
    </div>
  );
} 
export default App;
