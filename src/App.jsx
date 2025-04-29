import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from './features/auth/LoginRegister';
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Button/Sidebar";
import React, { useState } from 'react';

function App() {
  const [SidebarToggle, setSidebarToggle] = useState(false)
  return ((<Router>

    <div className='flex'> </div>
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/Dashboard" element={<Dashboard 
      SidebarToggle={SidebarToggle}
      setSidebarToggle={setSidebarToggle}/>} />
      <Route path="/Sidebar" element={<Sidebar SidebarToggle={SidebarToggle} />} />
    </Routes>
  </Router>)
   
  );
} 
export default App;
