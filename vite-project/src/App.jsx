import React from "react";
import { VehicleProvider } from "./context/VehicleContext";
import Dashboard from "./pages/Dashboard";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import { Car } from "lucide-react";
import "./App.css"; 
function App() {
  return (
    <VehicleProvider>
 <header className="header">
      <div className="icon-box">
        <Car size={24} />
      </div>
      <h1 className="title">Vehicle Fleet Management</h1>
    </header>
       <div className="toolbar" >
        <Search />
        <Filter />
        <Sort />
        
      </div>
      <Dashboard />
    </VehicleProvider>
  );
}

export default App;
