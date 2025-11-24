import React from "react";
import { VehicleProvider } from "./context/VehicleContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <VehicleProvider>
      <div style={{ padding: "20px" }}>
        <h1>Vehicle Fleet Management</h1>
        <Dashboard />
      </div>
    </VehicleProvider>
  );
}

export default App;
