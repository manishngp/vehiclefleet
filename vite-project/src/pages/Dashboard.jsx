import React, { useState } from "react";
import VehicleList from "../components/VehicleList";
import VehicleDetails from "../components/VehicleDetails";

const Dashboard = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 2 }}>
        <VehicleList setSelectedVehicle={setSelectedVehicle} />
      </div>
      <div style={{ flex: 1 }}>
        <VehicleDetails vehicle={selectedVehicle} />
      </div>
    </div>
  );
};

export default Dashboard;
